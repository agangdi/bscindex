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
        </div>
    )
}