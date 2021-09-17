import { Page } from "components/atomic";
import React, { ReactNode, useState } from "react";

interface IProps {
  type: string,
  onCallBack?: any,
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
          <span>Future Of Finance Fund [FFF</span>
          <span>$1,606,328.25 (-12.22%)</span>
          <span>VOLUME: $26881.26</span>
        </div>}
      </div>
      <div
        style={{
          height: '338px',
        }}
      >

      </div>
      <ValueInfo type={props.type} />
    </div>
  )
}

export function ValueInfo(props: IProps) {
  return (
    <div style={{width: '100%', height: '235px'}}></div>
  )
}

export function TypeInfo(props: IProps) {
  return (
    <div style={{width: '40%', height: '100%', padding: '23px 39px', borderLeft: '1px solid #394771'}}></div>
  )
}

export default function EXPAND() {
  const [type, setType] = useState("");

  const changeType = () => {
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
        <ChartHead type={'assets'} onCallBack={changeType} />
        <TypeInfo type={'assets'} />
      </div>
    </Page>
  );
}
