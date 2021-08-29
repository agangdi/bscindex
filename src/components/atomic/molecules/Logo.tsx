import { Space, Typography } from "antd";
import { useBreakpoints } from "hooks";
import { useHistory } from "react-router-dom";
import cx from "classnames";

interface Props {
  link?: string;
  title?: string;
  withTitle?: boolean;
  size?: "small" | "large";
  animated?: boolean;
  spinning?: boolean;
}

export function Logo({
  link = "/",
  withTitle = true,
  title = "INDEXED",
  spinning = false,
}: Props) {
  const history = useHistory();
  const { isMobile } = useBreakpoints();

  return (
    <div onClick={() => history.push(link)} style={{ cursor: "pointer" }}>
      <Space
        style={{
          transform: spinning ? "scale(2)" : "none",
          opacity: spinning ? 0.6 : 1,
        }}
      >
        {withTitle && (
          <Typography.Title
            level={isMobile ? 3 : 1}
            style={{ marginBottom: 0 }}
          >
            {title}
          </Typography.Title>
        )}
      </Space>
    </div>
  );
}
