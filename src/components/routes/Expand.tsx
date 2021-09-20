import { ExpandHandle, ExpandValue, IndexPoolChart, Page } from "components/atomic";
import React, { ReactNode, useState } from "react";

interface IProps {
  type: string,
  onCallBack?: any,
  tabs?: Array<string>,
}

export function ChartHead() {
  const [type, setType] = useState("ASSETS");
  const tabs: Array<string> = ["ASSETS", "TRADES", "SWAPS", "INFO"];

  const changeType = (type: string) => {
    setType(type)
    console.log(type)
  }
  return (
    <div
      style={{
        width: '60%',
      }}
    >
      <div>
        <div 
          className="flex-row-between"
          style={{
            padding: '20px',
            fontSize: '12px',
            color: '#ffffff',
            borderBottom: '1px solid #394771',
          }}
        >
          <span>
            <img src={require("images/fff.png").default} style={{width: '20px', height: '20px', borderRadius: '10px', marginRight: '10px'}} />
            Future Of Finance Fund [FFF
          </span>
          <span>$1,606,328.25 (-12.22%)</span>
          <span>VOLUME: $26881.26</span>
        </div>
      </div>
      <div
        style={{
          height: '338px',
          borderBottom: '1px solid #394771',
        }}
      >
        <IndexPoolChart poolId="0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41" />
      </div>
      <ValueInfo type={type} tabs={tabs} onCallBack={changeType} />
    </div>
  )
}

export function ValueInfo(props: IProps) {
  return (
    <div 
      className="flex-row-between" 
      style={{width: '100%', height: '235px'}}
    >
      <div style={{width: '150px', height: '100%', textAlign: 'center', color: '#ffffff', fontSize: '16px'}}>
        {(props.tabs as Array<string>).map((item, key) => (
          <div 
            className="expand-option" 
            key={key} 
            style={{height: '59px', lineHeight: '59px', borderRight: props.type == item ? '3px solid #ffffff' : '3px solid #394771'}}
            onClick={() => props.onCallBack(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <ExpandValue {...props} />
    </div>
  )
}

export function HandleValue() {
  const [handle, setHandle] = useState("Buy FFF");
  const handles: Array<string> = ["Buy FFF", "MINT", "BURN", "SWAP"];

  const changeHandle = (type: string) => {
    setHandle(type)
    console.log(type)
  }
  return (
    <div style={{width: '40%', height: '100%', padding: '23px 39px', borderLeft: '1px solid #394771'}}>
      <div
        className="flex-row-between"
        style={{
          width: '100%',
          height: '34px',
          borderTop: '1px solid #394771',
          borderLeft: '1px solid #394771',
          borderBottom: '1px solid #394771',
          fontSize: '12px',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: '34px',
        }}
      >
        {handles.map((item, key) => (
          <div 
            key={key} 
            style={{width: '25%', borderRight: '1px solid #394771', cursor: 'pointer', backgroundColor: handle == item ? '#406AFF' : ''}}
            onClick={() => changeHandle(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <ExpandHandle type={handle} />
    </div>
  )
}

export default function EXPAND() {
  
  return (
    <Page hasPageHeader={true} title={"EXPAND"}>
      <div
        className="flex-row-between"
        style={{
          width: '100%',
          height: '637px',
          background: '#1C2948',
          border: '1px solid #394771',
        }}
      >
        <ChartHead />
        <HandleValue />
      </div>
    </Page>
  );
}
