import { Link } from "react-router-dom";

interface IProps {
    type: string,
}

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

const swapData: Array<{
    time: string;
    input: string;
    output: string;
    transaction: string;
}> = [
    {
        time: '16 HRS AGO',
        input: '0.1 ETH	',
        output: '2.75 FFF',
        transaction: '0x27……2621',
    },
    {
        time: '16 HRS AGO',
        input: '0.1 ETH	',
        output: '2.75 FFF',
        transaction: '0x27……2621',
    },
    {
        time: '16 HRS AGO',
        input: '0.1 ETH	',
        output: '2.75 FFF',
        transaction: '0x27……2621',
    },
]

export function ExpandValue(props: IProps) {
    return (
        <div style={{width: 'calc(100% - 150px)', height: '100%'}}>
            {props.type == 'ASSETS' && 
                <div className="expand-assets-value">
                    {assetData.map((item, key) => (
                        <div className="assets-value" key={key}>
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
            }
            {props.type == 'TRADES' && 
                <div className="expand-table-value">
                    <div className="table-head">
                        <div style={{width: '18%'}}>TIME</div>
                        <div style={{width: '18%'}}>INPUT</div>
                        <div style={{width: '18%'}}>TYPE</div>
                        <div style={{width: '18%'}}>OUTPUT</div>
                        <div style={{width: '24%'}}>TRANSACTION</div>
                    </div>
                    <div className="table">
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
            }
            {props.type == 'SWAPS' && 
                <div className="expand-table-value">
                    <div className="table-head">
                        <div style={{width: '25%'}}>TIME</div>
                        <div style={{width: '25%'}}>INPUT</div>
                        <div style={{width: '25%'}}>OUTPUT</div>
                        <div style={{width: '25%'}}>TRANSACTION</div>
                    </div>
                    <div className="table">
                        {swapData.map((item, key) => (
                            <div className="table-row">
                                <div style={{width: '25%'}}>{item.time}</div>
                                <div style={{width: '25%'}}>{item.input}</div>
                                <div style={{width: '25%'}}>{item.output}</div>
                                <div style={{width: '25%'}}>{item.transaction}</div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {props.type == 'INFO' && 
                <div className="expand-info-value">
                    <div style={{width: '40%'}}>
                        <div className="info-btn">
                            <Link to={'/view-pool'}>
                                VIEW POOL
                            </Link>
                        </div>
                        <div className="info-btn">
                            <Link to={'/categories'}>
                                CATEGORY
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        width: '60%',
                        fontSize: '14px',
                        color: '#FFFFFF',
                        letterSpacing: '1.4px',
                        lineHeight: '28px',
                    }}>
                        <p>CUMULATIVE FEES:$30,963.94</p>
                        <p>VOLUME: $38,524.4</p>
                        <p>SWAP FEE: 2%</p>
                        <p>TVL: $1,559,198.14</p>
                        <p>SUPPLY: 21,839.54</p>
                    </div>
                </div>
            }
        </div>
    )
}