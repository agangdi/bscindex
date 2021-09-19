import { Page } from "components/atomic";
import { useState } from "react";

export default function CateGories() {
    const [tab, setTab] = useState(0)

    const tabs: Array<{
      title: string,
      index: number,
    }> = [
      {
        title: 'DESCRIPTION',
        index: 0,
      },
      {
        title: 'TOEKNS',
        index: 1,
      },
    ]
  
    return (
      <Page hasPageHeader={true} title={"CATEGORY"}>
        <div
          style={{
            width: '100%',
            height: '668px',
            background: '#1C2948',
            border: '1px solid #394771',
            padding: '25px 20px',
          }}
        >
          <div className="flex-row-start-center" style={{width: '100%', marginBottom: '25px'}}>
            {tabs.map((item, key) => (
              <div className="flex-column-between cursor" key={item.title} style={{width: '130px', height: '40px', marginRight: '10px'}} onClick={() => setTab(item.index)}>
                <div style={{fontSize: '18px', color: '#ffffff'}}>{item.title}</div>
                {item.index == tab ? 
                  <div style={{width: '100%', height: '4px', backgroundImage: 'linear-gradient(61deg, #D1FF51 3%, #FEE451 87%, #FFE351 87%)'}}></div>
                  :
                  <div style={{width: '100%', height: '4px'}}></div>
                }
              </div>
            ))}
          </div>
          {tab == 0 &&
            <div style={{fontSize: '14px'}}>
              <p style={{fontSize: '18px'}}>The Future Of Finance Fund (FFF)</p>
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
          }
          {tab == 1 && 
            <div className="flex-row-between" style={{borderTop: '1px #394771 solid', borderBottom: '1px #394771 solid', height: '50px', padding: '0 20px'}}>
              <span>NAME</span>
              <span>PRICE</span>
            </div>
          }
        </div>
      </Page>
    );
  }