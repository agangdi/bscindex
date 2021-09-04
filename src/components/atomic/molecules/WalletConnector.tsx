import { Button } from "antd";

import { useWalletConnectionDrawer } from "components/drawers";

export function WalletConnector() {
  const { open } = useWalletConnectionDrawer();

  return (
    <Button
      className="plus custom"
      type="primary"
      onClick={open}
      size="large"
      style={{ marginLeft: 12, fontSize: 16 }}
    >
      Connect to Wallet
    </Button>
  );
}
