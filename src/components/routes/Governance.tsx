import { Checkbox, Input } from 'antd'
import { IndexPoolChart, Page } from "components/atomic";
import { useState } from "react";

export function GovernanceInfo() {
    const defaultCheckedList: Array<string> = ['INDIVIDUAL'];
    const checkData: Array<{
        title: string;
    }> = [
        {
            title: 'INDIVIDUAL',
        },
        {
            title: 'DELEGATION',
        },
    ]

    const onChange = (list: Array<string>) => {
        debugger
    };

    const [test, setTest] = useState('');
    const onAmountChange = (value: string) => {
        setTest(value)
    }

    return (
        <div
            style={{
                width: '48.5%',
                height: '343px',
                border: '1px solid #394771',
                marginBottom: '60px',
                overflowY: 'auto',
                padding: '20px',
            }}
        >
            <h3 style={{marginBottom: '20px'}}>BALANCE：0  NDX</h3>
            <p style={{marginBottom: '10px'}}>STATUS： <span style={{color: '#D7FB51'}}>INACTIVE</span></p>
            <div style={{marginBottom: '20px'}}>You have not setup your wallet for voting yet, either for individual voting, or delegation.</div>
            <div className="flex-row-between">
                {checkData.map((item, key) => (
                    <Checkbox.Group value={defaultCheckedList} style={{ width: '100%' }} key={key} onChange={() => onChange}>
                        <div className="flex-row-between" style={{width: '35%', height: '25px'}}>
                            <p style={{marginBottom: 'unset'}}>{item.title}</p>
                            <Checkbox value={item.title} style={{marginLeft: '10px'}}></Checkbox>
                        </div>
                    </Checkbox.Group>
                ))}
            </div>
            <div className="info-btn" style={{width: '158px', marginTop: '20px'}}>INDIVIDUAL</div>

            <h3 style={{marginBottom: '20px', marginTop: '30px'}}>BALANCE：0  NDX</h3>
            <p style={{marginBottom: '10px'}}>STATUS： <span style={{color: '#D7FB51'}}>INACTIVE</span></p>
            <div style={{marginBottom: '20px'}}>Delegate  your  votes to another  address:</div>
            <div className="expand-handle-input">
                <Input
                    style={{border: 'unset', width: '60%'}}
                    value={test}
                    step="0.01"
                    onChange={() => onAmountChange}
                />
            </div>
            <div className="flex-row-between" style={{marginTop: '20px'}}>
                <div className="info-btn" style={{width: '148px'}}>GO BACK</div>
                <div className="info-btn" style={{width: '148px'}}>DELEGATE</div>
            </div>
        </div>
    )
}

export function GovernanceChart() {
    return (
        <div
            style={{
                width: '48.5%',
                // height: '282px',
                border: '1px solid #394771',
                marginBottom: '60px',
            }}
        >
            <IndexPoolChart poolId="0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41" />
        </div>
    )
}

export function GovernanceProposal() {
    const proposalData: Array<{
        title: string,
        id: string,
        ndx1: number,
        ndx2: number,
    }> = [
        {
            title: 'Upgrade Proxies  for  Index Pools  and  Controllers',
            id: '0xd  .  126788395',
            ndx1: 100,
            ndx2: 0,
        },
        {
            title: 'Upgrade Proxies  for  Index Pools  and  Controllers',
            id: '0xd  .  126788395',
            ndx1: 100,
            ndx2: 0,
        },
        {
            title: 'Loan  Wintermute Trading 150.000 NDX for market Making',
            id: '0xd  .  126788395',
            ndx1: 100,
            ndx2: 0,
        },
    ]
    return (
        <div
            style={{
                width: '100%',
                height: '522px',
                background: '#1C2948',
                border: '1px solid #394771',
            }}
        >
            <div className="border-bottom-line" style={{height: '56px', padding: '0 20px', fontSize: '18px', lineHeight: '56px'}}>PROPOSALS</div>
            {proposalData.map((item, key) => (
                <div className="gov-row">
                    <div style={{width: '35%'}}>
                        <p style={{marginBottom: '18px'}}>{item.title}</p>
                        <div className="flex-row-start-center">
                            <div className="info-btn" style={{width: '126px', marginBottom: 'unset', marginRight: '20px'}}>EXECUTED</div>
                            <p style={{color: '#D7FB51', marginBottom: 'unset'}}>{item.id}</p>
                        </div>
                    </div>
                    <div style={{width: '30%'}}>
                        <div className="flex-row-between" style={{marginBottom: '30px'}}>
                            <div className="value">
                                <div style={{width: (item.ndx1 + '%'), backgroundColor: '#406AFF', height: '4px'}}></div>
                            </div>
                            <p style={{width: '100px', marginBottom: 'unset', textAlign: 'left'}}>491,020.358  NDX</p>
                        </div>
                        <div className="flex-row-between">
                            <div className="value">
                                <div style={{width: (item.ndx2 + '%'), backgroundColor: '#406AFF', height: '4px'}}></div>
                            </div>
                            <p style={{width: '100px', marginBottom: 'unset', textAlign: 'left'}}>NDX</p>
                        </div>
                    </div>
                    <div className="info-btn">VOTE</div>
                </div>
            ))}
        </div>
    )
}

export default function Governance() {
  
    return (
      <Page hasPageHeader={true} title={"GOVERNANCE"}>
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
            <GovernanceInfo />
            <GovernanceChart />
            <GovernanceProposal />
        </div>
      </Page>
    );
  }