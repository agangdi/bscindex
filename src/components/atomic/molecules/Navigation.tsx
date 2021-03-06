import { AiOutlineUser } from "react-icons/ai";
import { ExternalLink } from "components/atomic";
import { FaGavel, FaSwimmingPool } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Menu, Space } from "antd";
import { RiSafe2Line } from "react-icons/ri";
import { useBreakpoints, useTranslator } from "hooks";
import { useMemo } from "react";

export function Navigation() {
  const tx = useTranslator();
  const { isMobile } = useBreakpoints();
  const { pathname } = useLocation();
  const selectedKey = useMemo(() => {
    for (const link of ["portfolio", "staking", "index-pools"]) {
      if (pathname.includes(link)) {
        return link;
      }
    }

    return "";
  }, [pathname]);

  return (
    <Menu
      id="header-nav"
      mode="horizontal"
      selectedKeys={[selectedKey]}
      style={{
        flex: 1,
        textTransform: "uppercase",
        fontSize: 21,
        background: "transparent",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Menu.Item key="index-pools">
        <Link to="/index-pools">
          <Space size="small">
            {!isMobile && <span>{tx("INDEX_POOLS")}</span>}
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item key="governance">
        <Link to="/governance">
          <Space>
            {!isMobile && <span>GOVERNANCE</span>}
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item key="categories">
        <Link to="/categories">
          <Space>
            {!isMobile && <span>GATEGORIES</span>}
          </Space>
        </Link>
      </Menu.Item>
      <Menu.Item key="staking">
        <Link to="/staking">
          <Space>
            {!isMobile && <span>{tx("STAKE")}</span>}
          </Space>
        </Link>
      </Menu.Item>
      {/* <Menu.Item>
        <ExternalLink to="" withIcon={false}>
          <Space size="small">
            {!isMobile && <span>Vote</span>}
          </Space>
        </ExternalLink>
      </Menu.Item> */}
      <Menu.Item key="portfolio">
        <Link to="/portfolio">
          <Space size="small">
            {!isMobile && <span>{tx("PORTFOLIO")}</span>}
          </Space>
        </Link>
      </Menu.Item>
    </Menu>
  );
}
