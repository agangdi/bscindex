import { Page } from "components/atomic";

export default function CateGoriesData() {
    const categoriesData: Array<{
        title: string;
        icons: Array<string>;
        tableData: Array<{
            symbol: string;
            size: number;
            price: string;
            supply: string;
            marketcap: string;
            swap: string;
            cumulative: string;
            volume: string;
        }>;
    }> = [
        {
            title: 'DEGEN  Index [DEGEN]',
            icons: [require("images/defi5.png").default, require("images/weth.png").default, require("images/weth.png").default, require("images/dai.png").default, require("images/degen.png").default],
            tableData: [{
                symbol: 'DEGEN',
                size: 10,
                price: '$2.66',
                supply: '2,657,606.97 ',
                marketcap: '$7,059,931.16 ',
                swap: '2%',
                cumulative: '$822348.82',
                volume: '$187,002.95',
            }],
        },
        {
            title: 'Cryptocurrency   [CC]',
            icons: [require("images/defi5.png").default, require("images/weth.png").default, require("images/weth.png").default, require("images/dai.png").default, require("images/degen.png").default],
            tableData: [{
                symbol: 'CC10',
                size: 10,
                price: '$2.66',
                supply: '2,657,606.97 ',
                marketcap: '$7,059,931.16 ',
                swap: '2%',
                cumulative: '$822348.82',
                volume: '$187,002.95',
            }],
        },
        {
            title: 'NFT  Platform  Index [NFTP]',
            icons: [require("images/defi5.png").default, require("images/weth.png").default, require("images/weth.png").default, require("images/dai.png").default, require("images/degen.png").default],
            tableData: [{
                symbol: 'NFTP',
                size: 10,
                price: '$2.66',
                supply: '2,657,606.97 ',
                marketcap: '$7,059,931.16 ',
                swap: '2%',
                cumulative: '$822348.82',
                volume: '$187,002.95',
            }],
        },
    ]

    return (
      <Page hasPageHeader={true} title={"GOVERNANCEEXECUTED"}>
        <div
          style={{
            width: '100%',
            height: '806px',
            color: '#fff',
            border: '1px solid #394771',
            background: '#1C2948',
            overflowY: 'auto',
          }}
        >
            <h2 style={{padding: '15px'}}>CATEGORIES</h2>
            {categoriesData.map((item, key) => (
                <>
                <div key={key} className="border-bottom-line">
                    <h3 style={{padding: '10px 15px'}}>{item.title}</h3>
                    <div className="flex-row-start-center" style={{width: '100%', padding: '15px', marginBottom: '15px'}}>
                        {item.icons.map((src, i) => (
                            <img src={src} style={{width: 25, height: 25, borderRadius: '50%', marginRight: '10px'}} />
                        ))}
                    </div>
                </div>
                <div className="expand-table-value" style={{height: 100}}>
                    <div className="table-head">
                        <div style={{width: '12%'}}>SYMBOL</div>
                        <div style={{width: '10%'}}>SIZE</div>
                        <div style={{width: '10%'}}>PRICE</div>
                        <div style={{width: '12%'}}>SUPPLY</div>
                        <div style={{width: '16%'}}>MARKETCAP</div>
                        <div style={{width: '10%'}}>SWAP FEE</div>
                        <div style={{width: '15%'}}>CUMULATIVE   FEES</div>
                        <div style={{width: '15%'}}>VOLUME</div>
                    </div>
                    <div className="table">
                        {item.tableData.map((item, key) => (
                            <div className="table-row">
                                <div style={{width: '12%'}}>{item.symbol}</div>
                                <div style={{width: '10%'}}>{item.size}</div>
                                <div style={{width: '10%'}}>{item.price}</div>
                                <div style={{width: '12%'}}>{item.supply}</div>
                                <div style={{width: '16%'}}>{item.marketcap}</div>
                                <div style={{width: '10%'}}>{item.swap}</div>
                                <div style={{width: '15%'}}>{item.cumulative}</div>
                                <div style={{width: '15%'}}>{item.volume}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
            ))}
            
        </div>
      </Page>
    );
  }