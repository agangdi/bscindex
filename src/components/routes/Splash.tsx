import { Button, Divider, Statistic, Typography } from "antd";
import { ExternalLink, IndexPoolWidgetGroup, Page } from "components/atomic";
import { Link } from "react-router-dom";
import { selectors } from "features";
import { useBreakpoints, useTranslator } from "hooks";
import { useSelector } from "react-redux";

export default function Splash() {
  const tx = useTranslator();
  const poolsExist = useSelector(selectors.selectPoolCount) > 0;
  const assetsUnderManagement = useSelector(
    selectors.selectTotalAssetsUnderManagement
  );
  const { isMobile } = useBreakpoints();

  return (
    <Page hasPageHeader={false}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 1056, marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundImage: `url(${require("theme/images/Graphics.png").default})`,
              backgroundSize: "100% 100%",
            }}
          >
            <Typography.Title style={{ fontSize: isMobile ? 36 : 64 }}>
              {tx("DECENTRALIZED_INDEX_PROTOCOL")}
            </Typography.Title>
            <Typography.Title level={3}>
              Gain exposure to passively-managed crypto index portfolios
              represented by a single token.
            </Typography.Title>
            {assetsUnderManagement !== "$0.00" && (
              <Statistic
                className="prominent-stat ant-statistic-title1"
                title="Total Protocol Assets Under Management "
                value={assetsUnderManagement}
                style={{ fontSize: 48 }}
              />
            )}
          </div>
          <Typography.Title level={3}>
            <div>
              <Button.Group
                style={{ 
                  flexDirection: isMobile ? "column" : "row", 
                  border: '1px solid #D7FB51', 
                  borderRadius: '2px', 
                  padding: '20px'
                }}
              >
                <Link to="/index-pools">
                  <Button
                    className="blank"
                    type="primary"
                    style={{
                      textTransform: "uppercase",
                      fontSize: 16,
                      fontFamily: 'SourceHanSansCN-Medium',
                      width: isMobile ? 160 : "auto",
                      height: "auto",
                      marginRight: isMobile ? 10 : 80,
                      marginBottom: isMobile ? 10 : 0,
                    }}
                  >
                    Buy an index
                  </Button>
                  <img src={require("theme/images/Arrow_Next.png").default} />
                </Link>
              </Button.Group>
            </div>
          </Typography.Title>
        </div>
      </div>
      {poolsExist && <IndexPoolWidgetGroup />}
    </Page>
  );
}
