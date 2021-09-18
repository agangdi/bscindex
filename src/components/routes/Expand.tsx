import { ExpandValue, Page } from "components/atomic";
import React, { ReactNode, useState } from "react";

interface IProps {
  type: string,
  onCallBack?: any,
  tabs?: Array<string>,
}

export function ChartHead(props: IProps) {
  return (
    <div
      style={{
        width: '60%',
      }}
    >
      <div>
        {props.type && <div 
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
        </div>}
      </div>
      <div
        style={{
          height: '338px',
          borderBottom: '1px solid #394771',
        }}
      >

      </div>
      <ValueInfo {...props} />
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

export function TypeInfo(props: IProps) {
  return (
    <div style={{width: '40%', height: '100%', padding: '23px 39px', borderLeft: '1px solid #394771'}}></div>
  )
}

export default function EXPAND() {
  const [type, setType] = useState("ASSETS");
  const tabs: Array<string> = ["ASSETS", "TRADES", "SWAPS", "INFO"];

  const changeType = (type: string) => {
    setType(type)
    console.log(type)
  }

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
        <ChartHead type={type} tabs={tabs} onCallBack={changeType} />
        <TypeInfo type={type} tabs={tabs} />
      </div>
    </Page>
  );
}
