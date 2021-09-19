import { Page } from "components/atomic";

export function LeftFlex() {
    return (
        <div style={{
            width: '65%',
            border: '1px solid #394771',
        }}>
            <div className="flex-row-between border-bottom-line" style={{padding: '20px'}}>
                <img src={require("images/uniswap-link.png").default} style={{width: 64, height: 64, borderRadius: '50%'}} />
                <div style={{width: 'calc(100% - 95px)'}}>
                    <div className="flex-row-between">
                        <div className="info-btn" style={{width: '124px', marginRight: '20px', marginBottom: 'unset'}}>EXECUTED</div>
                        <p>Loan Wintermute Trading 150,000 NDX for \u2028Market Making</p>
                    </div>
                    <div className="flex-row-start-center" style={{marginTop: '20px'}}>
                        <p>0x7e38...9282  </p>
                        <p style={{color: '#D7FB51', marginLeft: '30px'}}>EndBlock: 12295876</p>
                    </div>
                </div>
            </div>
            <div className="border-bottom-line" style={{padding: '20px'}}>
                <div className="flex-row-start-center" style={{marginBottom: '30px'}}>
                    <h3 style={{width: 100, textAlign: 'left', marginRight: '30px'}}>FOR</h3>
                    <div className="value">
                        <div style={{width: (100 + '%'), backgroundColor: '#406AFF', height: '4px'}}></div>
                    </div>
                    <p style={{width: '100px', marginBottom: 'unset', textAlign: 'left', marginLeft: '30px'}}>491,020.358  NDX</p>
                </div>
                <div className="flex-row-start-center">
                    <h3 style={{width: 100, textAlign: 'left', marginRight: '30px'}}>AGAINST</h3>
                    <div className="value">
                        <div style={{width: (0 + '%'), backgroundColor: '#406AFF', height: '4px'}}></div>
                    </div>
                    <p style={{width: '100px', marginBottom: 'unset', textAlign: 'left', marginLeft: '30px'}}>NDX</p>
                </div>
            </div>
            <div className="border-bottom-line" style={{padding: '20px'}}>
                <h3 style={{marginBottom: '20px'}}>DETAILS</h3>
                <p>The Future Of Finance Fund aims to be a one-stop shop for exposure to the cryptocurrency investing space.</p>
            </div>
            <div className="border-bottom-line" style={{padding: '20px'}}>
                The Future Of Finance Fund (FFF)
                The Future Of Finance Fund aims to be a one-stop shop for exposure to the cryptocurrency investing space. It is an ETF with a 40% focus on Bitcoin and Ether, significant exposure to Ethereum-based large/medium-cap DeFi protocols, and a small grouping of higher risk/reward assets across Ethereum with a greater chance of upside. As the Indexed protocol evolves, this latter category will be replaced with a stablecoin yield-farming component.

                Methodology
                The FFF pegs WETH and WBTC to a fixed weight of 20% each and weights the remaining components according to the square root of their circulating market cap, the data for which is queried from off-chain data sources using an oracle service. Non-pegged ETF components are reweighed weekly.

                Inclusion Criteria
                The FFF has the following criteria for inclusion:

                No major vulnerabilities have been discovered in the token contract.

                The token’s supply can not be arbitrarily inflated or deflated maliciously.

                The control model should be considered if the supply can be modified through governance decisions.

                The token does not have transfer fees or other non-standard balance updates.
                The token meets the requirements of the ERC20 standard.
            </div>
        </div>
    )
}

export function RightFlex() {
    const voteData: Array<{
        title: string;
        icon: string;
        value: number;
    }> = [
        {
            title: '0x037d……6cff\u2028',
            icon: require("images/defi5.png").default,
            value: +75534.29,
        },
        {
            title: '0x037d……6cff\u2028',
            icon: require("images/weth.png").default,
            value: +75534.29,
        },
        {
            title: '0x037d……6cff\u2028',
            icon: require("images/dai.png").default,
            value: +75534.29,
        },
        {
            title: '0x037d……6cff\u2028',
            icon: require("images/degen.png").default,
            value: +75534.29,
        },
    ]
    return (
        <div style={{
            width: '32%',
        }}>
            <div style={{
                width: '100%',
                border: '1px solid #394771',
                marginBottom: '40px',
                padding: '20px',
            }}>
                <div className="flex-row-between">
                    <span>FOR 400000</span>
                    <span>AGANST 0.00</span>
                </div>
                <p style={{marginTop: '90px'}}>requirements of the ERC20 standard</p>
            </div>
            <div style={{
                width: '100%',
                border: '1px solid #394771',
                padding: '20px',
            }}>
                <h3 style={{marginBottom: '20px'}}>VOTE</h3>
                {voteData.map((item, key) => (
                    <div className="flex-row-start-center">
                        <img src={item.icon} style={{width: 48, height: 48, borderRadius: '50%', marginRight: '30px'}} />
                        <div className="flex-column-between" style={{width: 185, height: 65}}>
                            <p>{item.title}</p>
                            <p style={{color: '#D7FB51'}}>{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function GovernanceExecuted() {
  
    return (
      <Page hasPageHeader={true} title={"GOVERNANCEEXECUTED"}>
        <div
          className="flex-row-between gov-executed"
          style={{
            width: '100%',
            height: '100%',
            color: '#fff',
            alignItems: 'flex-start',
          }}
        >
            <LeftFlex />
            <RightFlex />
        </div>
      </Page>
    );
  }