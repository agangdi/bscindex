import { Page } from "components/atomic";

export function ViewChart() {
    return (
        <div
            style={{
                width: '48.5%',
                height: '248.5px',
                background: '#1C2948.5',
                border: '1px solid #394771',
                marginBottom: '40px',
            }}
        ></div>
    )
}

export function ViewInfo() {
    return (
        <div
            style={{
                width: '48.5%',
                height: '248.5px',
                background: '#1C2948.5',
                border: '1px solid #394771',
                marginBottom: '40px',
                padding: '20px',
            }}
        >
            <h3 style={{marginBottom: '20px'}}>BALANCES</h3>
            <div className="flex-row-between" style={{marginBottom: '20px'}}>
                <span>FFF：</span>
                <span>0.00</span>
            </div>
            <div className="flex-row-between" style={{marginBottom: '40px'}}>
                <span>UNIV2-ETH-FFF：</span>
                <span>0.00</span>
            </div>
            <div className="flex-row-between">
                <div className="info-btn" style={{width: '158px'}}>ADD LIQUIDITY</div>
                <div className="info-btn" style={{width: '209px'}}>REMOVE  LIQUIDITY</div>
            </div>
        </div>
    )
}

export function ViewEvents() {
    const tradeData: Array<{
        time: string;
        input: string;
        type: string;
        output: string;
        transaction: string;
    }> = [
        {
            time: '16 HRS AGO',
            input: '0.1 ETH	',
            type: 'BUY',
            output: '2.75 FFF',
            transaction: '0x27……2621',
        },
        {
            time: '16 HRS AGO',
            input: '0.1 ETH	',
            type: 'SELL',
            output: '2.75 FFF',
            transaction: '0x27……2621',
        },
        {
            time: '16 HRS AGO',
            input: '0.1 ETH	',
            type: 'SELL',
            output: '2.75 FFF',
            transaction: '0x27……2621',
        },
    ]

    return (
        <div
            style={{
                width: '48.5%',
                height: '248.5px',
                background: '#1C2948.5',
                border: '1px solid #394771',
            }}
        >
            <div className="expand-table-value">
                <div className="table-head" style={{fontSize: '18px', paddingLeft: '20px'}}>
                    EVENTS
                </div>
                <div className="table-head" style={{top: '50px'}}>
                    <div style={{width: '18%'}}>TIME</div>
                    <div style={{width: '18%'}}>INPUT</div>
                    <div style={{width: '18%'}}>TYPE</div>
                    <div style={{width: '18%'}}>OUTPUT</div>
                    <div style={{width: '24%'}}>TRANSACTION</div>
                </div>
                <div className="table" style={{top: '100px'}}>
                    {tradeData.map((item, key) => (
                        <div className="table-row">
                            <div style={{width: '18%'}}>{item.time}</div>
                            <div style={{width: '18%'}}>{item.input}</div>
                            <div style={{width: '18%', color: item.type == 'BUY' ? '#D7FB51' : '#E82574'}}>{item.type}</div>
                            <div style={{width: '18%'}}>{item.output}</div>
                            <div style={{width: '24%'}}>{item.transaction}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function ViewAssets() {
    const assetData: Array<{
        title: string;
        icon: string;
        value: number;
        color: string;
        text: string;
    }> = [
        {
            title: 'DEFI Top 5  TO  [DEFI5]',
            icon: require("images/defi5.png").default,
            value: 35,
            color: '#406AFF',
            text: '5,689.34 DEFI5 ≈ $400,589.131',
        },
        {
            title: 'Wrapped Ether  [WETH]',
            icon: require("images/weth.png").default,
            value: 35,
            color: '#E82574',
            text: '163.409 WETH ≈ $321,694.978',
        },
        {
            title: 'Wrapped Bitcoin[WBTC]',
            icon: require("images/dai.png").default,
            value: 30,
            color: '#F09242',
            text: '163.409 WETH ≈ $321,694.978',
        },
        {
            title: 'DEGEN Index[DEGEN]',
            icon: require("images/degen.png").default,
            value: 25,
            color: '#D7FB51',
            text: '163.409 WETH ≈ $321,694.978',
        },
    ]
    return (
        <div
            style={{
                width: '48.5%',
                height: '522px',
                background: '#1C2948.5',
                border: '1px solid #394771',
                padding: '20px',
            }}
        >
            <h3 style={{marginBottom: '20px'}}>ASSETS</h3>
            <div className="expand-assets-value" style={{width: '50%'}}>
                {assetData.map((item, key) => (
                    <div className="assets-value" style={{width: '100%'}} key={key}>
                        <img src={item.icon} />
                        <div className="value-content">
                            <p>{item.title}</p>
                            <div className="value">
                                <div style={{width: (item.value + '%'), backgroundColor: item.color, height: '4px'}}></div>
                            </div>
                            <p style={{color: '#A7C1FF', transform: 'scale(0.9)', textAlign: 'left'}}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function ViewPool() {
  
    return (
      <Page hasPageHeader={true} title={"VIEW_POOL"}>
        <div
          className="flex-row-between-wrap"
          style={{
            width: '100%',
            height: '100%',
            padding: '50px 40px',
            color: '#fff',
            alignItems: 'flex-start',
          }}
        >
            <ViewChart />
            <ViewInfo />
            <ViewEvents />
            <ViewAssets />
        </div>
      </Page>
    );
  }