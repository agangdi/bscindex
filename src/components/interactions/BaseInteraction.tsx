import * as yup from "yup";
import { Alert, Button, Col, Divider, Row, Space } from "antd";
import { Flipper, TokenSelector } from "components/atomic";
import { Formik, FormikProps, useFormikContext } from "formik";
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { convert } from "helpers";
import { selectors } from "features";
import {
  useBreakpoints,
  useMultiTokenMintCallbacks,
  useTokenApproval,
  useTokenBalance,
  useTokenBalances,
  useTokenRandomizer,
  useTranslator,
} from "hooks";
import { useSelector } from "react-redux";
import noop from "lodash.noop";

// #region Common
type Asset = { name: string; symbol: string; id: string };

interface Props {
  assets: Asset[];
  spender: string;
  extra?: ReactNode;
  disableInputSelect?: boolean;
  disableOutputSelect?: boolean;
  defaultInputSymbol?: string;
  defaultOutputSymbol?: string;
  requiresApproval?: boolean;
  onSubmit(values: SingleInteractionValues): void;
  onChange(values: SingleInteractionValues): void | string;
  loading?: boolean;
}

// #endregion

// #region Single
const singleInitialValues = {
  fromToken: "",
  fromAmount: 0,
  toToken: "",
  toAmount: 0,
  lastTouchedField: "from" as "from" | "to",
};

const singleInteractionSchema = yup.object().shape({
  fromToken: yup.string().min(0, "A token is required in the 'From' field."),
  fromAmount: yup.number().min(0, "From balance must be greater than zero."),
  toToken: yup.string().min(1, "A token is required in the 'To' field."),
});

export type SingleInteractionValues = typeof singleInitialValues;

export function SingleInteraction({
  assets,
  spender,
  extra = null,
  onSubmit,
  onChange,
  defaultInputSymbol,
  defaultOutputSymbol,
  disableInputSelect,
  disableOutputSelect,
  requiresApproval = true,
  loading,
}: Props) {
  const interactionRef = useRef<null | HTMLDivElement>(null);

  return (
    <div
      className="Interaction"
      ref={interactionRef}
      style={{ position: "relative" }}
    >
      <Formik
        initialValues={singleInitialValues}
        onSubmit={onSubmit}
        validationSchema={singleInteractionSchema}
      >
        {(props) => (
          <SingleInteractionInner
            {...props}
            loading={loading}
            assets={assets}
            spender={spender}
            extra={extra}
            onSubmit={onSubmit}
            onChange={onChange}
            defaultInputSymbol={defaultInputSymbol}
            defaultOutputSymbol={defaultOutputSymbol}
            disableInputSelect={disableInputSelect}
            disableOutputSelect={disableOutputSelect}
            requiresApproval={requiresApproval}
          />
        )}
      </Formik>
    </div>
  );
}

type InnerSingleProps = Omit<Props, "title"> &
  FormikProps<SingleInteractionValues>;

function SingleInteractionInner({
  spender,
  assets,
  extra,
  values,
  isValid,
  handleSubmit,
  onChange,
  setFieldValue,
  setValues,
  errors,
  setFieldError,
  defaultInputSymbol,
  defaultOutputSymbol,
  disableInputSelect,
  disableOutputSelect,
  requiresApproval,
  loading,
}: InnerSingleProps) {
  const tx = useTranslator();
  const tokenLookup = useSelector(selectors.selectTokenLookupBySymbol);
  const { tokenId, symbol, approveAmount, rawApproveAmount } = useMemo(() => {
    if (values.fromToken && values.fromAmount) {
      const tokenIn = tokenLookup[values.fromToken.toLowerCase()];
      if (tokenIn) {
        return {
          tokenId: tokenIn.id,
          symbol: values.fromToken.toLowerCase(),
          approveAmount: values.fromAmount.toString(),
          rawApproveAmount: convert
            .toToken(values.fromAmount.toString(), tokenIn.decimals)
            .toString(10),
        };
      }
    }
    return {
      tokenId: "",
      symbol: "",
      approveAmount: "0",
      rawApproveAmount: "0",
    };
  }, [values.fromAmount, values.fromToken, tokenLookup]);
  // @todo Clean this up at some point.
  // Not doing the lookup by symbol in the hook because we already have it in scope
  const { status, approve } = useTokenApproval({
    spender,
    tokenId,
    amount: approveAmount,
    rawAmount: rawApproveAmount,
    symbol,
  });
  const inputOptions = useMemo(
    () => assets.filter(({ symbol }) => symbol !== values.toToken),
    [assets, values.toToken]
  );
  const outputOptions = useMemo(
    () => assets.filter(({ symbol }) => symbol !== values.fromToken),
    [assets, values.fromToken]
  );
  const disableFlip = disableInputSelect || disableOutputSelect;
  const handleFlip = useCallback(() => {
    if (!disableFlip) {
      const newValues = {
        fromToken: values.toToken,
        toToken: values.fromToken,
        fromAmount: values.toAmount,
        toAmount: values.fromAmount,
        lastTouchedField: values.lastTouchedField,
      };
      const error = onChange(newValues as SingleInteractionValues);
      if (error) {
        const inputErr =
          error.includes("Input") ||
          (newValues.lastTouchedField === "from" && !error.includes("Output"));

        if (inputErr) {
          setFieldError("fromAmount", error);
        } else {
          setFieldError("toAmount", error);
        }
      }
      setValues(newValues);
    }
  }, [disableFlip, values, setValues, onChange, setFieldError]);

  // Effect:
  // On initial load, select two arbitrary tokens.
  useTokenRandomizer({
    assets,
    defaultInputSymbol,
    defaultOutputSymbol,
    from: values.fromToken,
    to: values.toToken,
    changeFrom: (newFrom) => setFieldValue("fromToken", newFrom),
    changeTo: (newTo) => setFieldValue("toToken", newTo),
  });

  const handleChange = (
    field: "from" | "to",
    {
      token,
      amount,
      error: fieldError,
    }: { token?: string; amount?: number; error?: string }
  ) => {
    const [tokenField, amountField] =
      field === "from" ? ["fromToken", "fromAmount"] : ["toToken", "toAmount"];
    const newValues = {
      ...values,
      [tokenField]: token || "",
      [amountField]: amount || 0,
      lastTouchedField: field,
    } as SingleInteractionValues;
    const calcError = onChange(newValues);
    setValues(newValues, false);
    if (fieldError) {
      setFieldError(amountField, fieldError);
    } else if (calcError) {
      if (calcError.includes("Input")) {
        setFieldError("fromAmount", calcError);
      } else if (calcError.includes("Output")) {
        setFieldError("toAmount", calcError);
      }
    }
  };

  return (
    <Row gutter={24}>
      <Col xs={24} sm={10}>
        <TokenSelector
          loading={loading}
          isInput
          autoFocus={true}
          label={tx("FROM")}
          assets={inputOptions}
          value={{
            token: values.fromToken,
            amount: values.fromAmount,
          }}
          selectable={!disableInputSelect}
          error={errors.fromAmount}
          onChange={(newValues) => handleChange("from", newValues)}
        />

        <Flipper disabled={disableFlip} onFlip={handleFlip} />

        <TokenSelector
          loading={loading}
          label={tx("TO")}
          assets={outputOptions}
          value={{
            token: values.toToken,
            amount: values.toAmount,
          }}
          selectable={!disableOutputSelect}
          onChange={(newValues) => handleChange("to", newValues)}
        />

        <Divider />

        <InteractionErrors />

        {extra}

        {requiresApproval && status === "approval needed" ? (
          <Button
            loading={loading}
            type="primary"
            style={{ width: "100%" }}
            disabled={!isValid}
            onClick={approve}
          >
            Approve
          </Button>
        ) : (
          <Button
            loading={loading}
            type="primary"
            disabled={!isValid || (requiresApproval && status === "unknown")}
            onClick={() => handleSubmit()}
            style={{ width: 336 }}
          >
            Send
          </Button>
        )}
      </Col>
    </Row>
  );
}

function InteractionErrors() {
  const { errors, touched } = useFormikContext<typeof singleInitialValues>();
  const formattedErrors = Object.entries(errors)
    .filter(([key]) => touched[key as keyof SingleInteractionValues])
    .map(([, value], index) => <li key={index}>{value}</li>);

  return formattedErrors.length > 0 ? (
    <>
      <Alert
        showIcon={true}
        type="error"
        message="Please fix the following issues:"
        description={<ul>{formattedErrors}</ul>}
      />
      <Divider />
    </>
  ) : null;
}

// #endregion

// #region Multi
const multiInitialValues = {
  fromToken: "",
  fromAmount: 0,
};

export type MultiInteractionValues = typeof multiInitialValues;

const multiInteractionSchema = yup.object().shape({
  fromToken: yup.string().min(0, "A token is required in the 'From' field."),
  fromAmount: yup.number().min(0, "From balance must be greater than zero."),
});

type MultiProps = Omit<Props, "onSubmit" | "onChange"> & {
  onSubmit?(values: MultiInteractionValues): void;
  onChange?(values: MultiInteractionValues): void;
  isInput?: boolean;
  kind: "mint" | "burn";
};

export function MultiInteraction({
  assets,
  spender,
  extra = null,
  isInput,
  onSubmit = noop,
  onChange = noop,
  defaultInputSymbol,
  defaultOutputSymbol,
  disableInputSelect,
  disableOutputSelect,
  requiresApproval = true,
  kind,
}: MultiProps) {
  const interactionRef = useRef<null | HTMLDivElement>(null);

  return (
    <div
      className="Interaction"
      ref={interactionRef}
      style={{ position: "relative" }}
    >
      <Formik
        initialValues={multiInitialValues}
        onSubmit={onSubmit}
        validationSchema={multiInteractionSchema}
      >
        {(props) => (
          <MultiInteractionInner
            {...props}
            isInput={isInput}
            assets={assets}
            spender={spender}
            extra={extra}
            onSubmit={onSubmit}
            onChange={onChange}
            defaultInputSymbol={defaultInputSymbol}
            defaultOutputSymbol={defaultOutputSymbol}
            disableInputSelect={disableInputSelect}
            disableOutputSelect={disableOutputSelect}
            requiresApproval={requiresApproval}
            kind={kind}
          />
        )}
      </Formik>
    </div>
  );
}

type InnerMultiProps = Omit<MultiProps, "title"> &
  FormikProps<MultiInteractionValues>;

function MultiInteractionInner({
  spender,
  assets,
  requiresApproval,
  isValid,
  handleSubmit,
  isInput,
  errors,
  setFieldError,
  kind,
}: InnerMultiProps) {
  const tx = useTranslator();
  const tokenLookup = useSelector(selectors.selectTokenLookup);
  const { values, setFieldValue } = useFormikContext<MultiInteractionValues>();
  const tokenValue = useMemo(
    () => ({
      token: tokenLookup[spender]?.symbol ?? "",
      amount: values.fromAmount,
    }),
    [spender, tokenLookup, values.fromAmount]
  );
  const handleChange = useCallback(
    (changedValue: { token?: string; amount?: number; error?: string }) => {
      if (changedValue.token) {
        setFieldValue("fromToken", changedValue.token, false);
      }
      if (changedValue.amount) {
        setFieldValue("fromAmount", changedValue.amount, false);
      }
      if (changedValue.error) {
        setFieldError("fromAmount", changedValue.error);
      }
    },
    [setFieldError, setFieldValue]
  );
  const [lookup, setLookup] = useState<Record<string, number>>({});
  const { calculateAmountsIn } = useMultiTokenMintCallbacks(spender);
  const { tokenId, symbol, approveAmount, rawApproveAmount } = useMemo(() => {
    if (values.fromToken && values.fromAmount) {
      const tokenIn = tokenLookup[values.fromToken.toLowerCase()];
      if (tokenIn) {
        return {
          tokenId: tokenIn.id,
          symbol: values.fromToken.toLowerCase(),
          approveAmount: values.fromAmount.toString(),
          rawApproveAmount: convert
            .toToken(values.fromAmount.toString(), tokenIn.decimals)
            .toString(10),
        };
      }
    }
    return {
      tokenId: "",
      symbol: "",
      approveAmount: "0",
      rawApproveAmount: "0",
    };
  }, [values.fromAmount, values.fromToken, tokenLookup]);
  const { status, approve } = useTokenApproval({
    spender,
    tokenId,
    amount: approveAmount,
    rawAmount: rawApproveAmount,
    symbol,
  });
  const tokenBalances = useTokenBalances(assets.map(({ id }) => id));
  const allApproved = assets.every((asset, index) => {
    const amount = lookup[asset.id] ?? 0;
    const balance = parseFloat(convert.toBalance(tokenBalances[index]));

    return balance > amount;
  });
  const { sm } = useBreakpoints();

  // Effect:
  // When the form changes, re-calculate what goes into each field.
  useEffect(() => {
    const result = calculateAmountsIn(values.fromAmount.toString());

    if (result) {
      const { tokens, amountsIn } = result;
      const formatted = tokens.reduce((prev, next, index) => {
        prev[next] = parseFloat(convert.toBalance(amountsIn[index]));
        return prev;
      }, {} as Record<string, number>);

      setLookup(formatted);
    }
  }, [calculateAmountsIn, values.fromAmount]);

  return (
    <Row gutter={12}>
      <Col xs={24} sm={12}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <TokenSelector
            isInput={isInput}
            error={errors.fromAmount}
            assets={[]}
            label={tx("FROM")}
            selectable={false}
            value={tokenValue}
            onChange={handleChange}
          />
          <Divider />
          {requiresApproval && status === "approval needed" ? (
            <Button
              type="primary"
              style={{ width: "100%" }}
              disabled={!isValid}
              onClick={approve}
            >
              Approve
            </Button>
          ) : (
            <Button
              type="primary"
              style={{ width: 336 }}
              disabled={
                (kind === "mint" && !allApproved) ||
                !isValid ||
                (requiresApproval && status === "unknown")
              }
              onClick={() => handleSubmit()}
            >
              Send
            </Button>
          )}
          {kind === "mint" && !allApproved && (
            <Alert
              type="error"
              message="Ensure all asset amounts are approved prior to sending
            transaction."
            />
          )}
        </Space>
      </Col>
      <Col xs={24} sm={12}>
        {!sm && <Divider />}
        {assets.map((asset) => (
          <AssetEntry
            key={asset.id}
            {...asset}
            kind={kind}
            spender={spender}
            amount={lookup[asset.id] ?? 0}
            error={(errors as any)[asset.id]}
          />
        ))}
      </Col>
    </Row>
  );
}

function AssetEntry(
  props: Asset & {
    spender: string;
    amount: number;
    error: string;
    kind: "mint" | "burn";
  }
) {
  const { status, approve } = useTokenApproval({
    spender: props.spender,
    tokenId: props.id,
    amount: props.amount.toString(),
    rawAmount: convert.toToken(props.amount.toString()).toString(),
    symbol: props.symbol,
  });
  const needsApproval = props.kind === "mint" && status !== "approved";
  const balance = useTokenBalance(props.id);
  const insufficientBalanceError =
    props.kind === "mint" &&
    parseFloat(convert.toBalance(balance)) < props.amount
      ? "Insufficient balance"
      : "";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <TokenSelector
        isInput={false}
        key={props.id}
        selectable={false}
        assets={[]}
        showBalance={true}
        value={{
          token: props.symbol,
          amount: props.amount,
        }}
        error={insufficientBalanceError || props.error}
      />
      {needsApproval && (
        <Button type="default" disabled={false} onClick={approve}>
          Approve
        </Button>
      )}
    </div>
  );
}
// #endregion
