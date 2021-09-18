import { Checkbox, InputNumber, Tag } from 'antd'
import { useState } from "react";

interface IProps {
    type: string,
}

export function BuyFFF() {
    const [ETH, setETH] = useState(0);
    const onAmountChange = (value: number) => {
        setETH(value)
    }
    return (
        <div>
            <p style={{marginBottom: '10px'}}>SEND</p>
            <div className="expand-handle-input">
                <InputNumber
                    style={{border: 'unset', width: '60%'}}
                    value={ETH}
                    step="0.01"
                    onChange={onAmountChange}
                />
                <span>ETH</span>
            </div>
            <p style={{marginBottom: '30px'}}>BALANCE: 0.0138</p>
            <div className="flex-column-between" style={{width: '100%', height: '100px', marginBottom: '10px'}}>
                <span>1  ETH =  27.45469  FFF</span>
                <img src={require("images/band.png").default} style={{width: '20px', height: '20px', borderRadius: '10px'}} />
                <span style={{color: '#D7FB51'}}>1  FFF =  $ 72.17</span>
            </div>
            <p style={{marginBottom: '10px'}}>RECEIVE</p>
            <div className="expand-handle-input">
                <InputNumber
                    style={{border: 'unset', width: '60%'}}
                    value={ETH}
                    step="0.01"
                    onChange={onAmountChange}
                />
                <span>ETH</span>
            </div>
            <p style={{marginBottom: '20px'}}>BALANCE: 0.0138</p>
            <div className="flex-row-between" style={{marginBottom: '40px'}}>
                <span>FEE：</span>
                <span>0.00ETH</span>
            </div>
            <div className="expand-btn">SWAP</div>
        </div>
    )
}

export function MINT() {
    const [FFF, setFFF] = useState(0);
    const onAmountChange = (value: number) => {
        setFFF(value)
    }
    const defaultCheckedList: Array<string> = ['DEFI 5', 'WETH'];
    const mintData: Array<{
        title: string;
        icon: string;
        value: number;
    }> = [
        {
            title: 'DEFI 5',
            icon: require("images/defi5.png").default,
            value: 0,
        },
        {
            title: 'WETH',
            icon: require("images/defi5.png").default,
            value: 0,
        },
        {
            title: 'WBTH',
            icon: require("images/defi5.png").default,
            value: 0,
        },
    ]

    const onChange = (list: Array<string>) => {
        debugger
    };

    return (
        <div>
            <p style={{marginBottom: '10px'}}>RECEIVE</p>
            <div className="expand-handle-input">
                <InputNumber
                    style={{border: 'unset', width: '60%'}}
                    value={FFF}
                    step="0.01"
                    onChange={onAmountChange}
                />
                <span>FFF</span>
            </div>
            <p style={{marginBottom: '20px'}}>SLIPPAGE：&nbsp;&nbsp;&nbsp;
                <Tag color="#394771">1%</Tag>
                <Tag color="#406AFF">2%</Tag>
            </p>
            {mintData.map((item, key) => (
                <Checkbox.Group value={defaultCheckedList} style={{ width: '100%' }} onChange={() => onChange}>
                    <div className="expand-check-bar">
                        <Checkbox value={item.title} style={{marginRight: '18px'}}>{item.title}</Checkbox>
                        <img src={item.icon} style={{width: '28px', height: '28px', borderRadius: '14px', marginRight: '12px'}} />
                        <p style={{marginBottom: 'unset'}}>{item.title}</p>
                        <div className="expand-handle-input" style={{width: '169px', marginLeft: 'auto', marginBottom: 'unset'}}>
                            <InputNumber
                                style={{border: 'unset', width: '60%'}}
                                value={item.value}
                                step="0.01"
                            />
                            <div className="tag-air">Amount</div>
                        </div>
                    </div>
                </Checkbox.Group>
            ))}
            <div className="flex-row-between" style={{width: '100%', marginTop: '20px'}}>
                <div className="info-btn" style={{width: '180px'}}>MINT WITH UNISWAP</div>
                <div className="info-btn" style={{width: '160px'}}>MINT</div>
            </div>
        </div>
    )
}

export function BURN() {
    const [FFF, setFFF] = useState(0);
    const onAmountChange = (value: number) => {
        setFFF(value)
    }
    const defaultCheckedList: Array<string> = ['DEFI 5', 'WETH'];
    const mintData: Array<{
        title: string;
        icon: string;
        value: number;
    }> = [
        {
            title: 'DEFI 5',
            icon: require("images/defi5.png").default,
            value: 0,
        },
        {
            title: 'WETH',
            icon: require("images/defi5.png").default,
            value: 0,
        },
        {
            title: 'WBTH',
            icon: require("images/defi5.png").default,
            value: 0,
        },
    ]

    const onChange = (list: Array<string>) => {
        debugger
    };

    return (
        <div>
            <p style={{marginBottom: '10px'}}>DESTROY</p>
            <div className="expand-handle-input">
                <InputNumber
                    style={{border: 'unset', width: '60%'}}
                    value={FFF}
                    step="0.01"
                    onChange={onAmountChange}
                />
                <span>FFF</span>
            </div>
            <p style={{marginBottom: '20px'}}>BALANCE: 0.00</p>
            {mintData.map((item, key) => (
                <Checkbox.Group value={defaultCheckedList} style={{ width: '100%' }} onChange={() => onChange}>
                    <div className="expand-check-bar">
                        <Checkbox value={item.title} style={{marginRight: '18px'}}>{item.title}</Checkbox>
                        <img src={item.icon} style={{width: '28px', height: '28px', borderRadius: '14px', marginRight: '12px'}} />
                        <p style={{marginBottom: 'unset'}}>{item.title}</p>
                        <div className="expand-handle-input" style={{width: '169px', marginLeft: 'auto', marginBottom: 'unset'}}>
                            <InputNumber
                                style={{border: 'unset', width: '60%'}}
                                value={item.value}
                                step="0.01"
                            />
                            <div className="tag-air">Amount</div>
                        </div>
                    </div>
                </Checkbox.Group>
            ))}
            <div className="flex-row-between" style={{width: '100%', marginTop: '20px', justifyContent: 'space-around'}}>
                <div className="info-btn" style={{width: '160px'}}>BURN</div>
            </div>
        </div>
    )
}

export function ExpandHandle(props: IProps) {
    return (
        <div style={{
            width: '100%', 
            fontSize: '12px',
            color: '#ffffff',
            textAlign: 'left',
            marginTop: '20px',            
        }}>
            {props.type == 'Buy FFF' && <BuyFFF />}
            {props.type == 'MINT' && <MINT />}
            {props.type == 'BURN' && <BURN />}
        </div>
    )
}