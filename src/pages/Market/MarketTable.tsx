import React, { useEffect, useState } from "react";
import { Col,  Form } from "react-bootstrap";
import { useFetchCoins } from "../../hooks/useFetchCoins";
import  DataTable,  {TableColumn } from "react-data-table-component";


interface KlineData {
  s: string;
  t: number;
  o: string;
  c: string;
  h: string;
  l: string;
}

const MarketTable = () => {
  const [klineData, setKlineData] = useState<KlineData[]>([]);
  const [klineInterval, setKlineInterval] = useState("1m");
  const [filterText, setFilterText] = useState('');
  const coins = useFetchCoins();
  
  
  let coinKlines = coins.map((c)=>{return `${c.name.toLowerCase()}@kline_${klineInterval}`})
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };
  const filteredItems = klineData.filter((item) =>
  item.s.toLowerCase().includes(filterText.toLowerCase())
);
  
  // console.log(coinKlines);
  const onChangeInterval = (e:any) => {
    setKlineInterval(e.target.value)
    

  }
  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws");
    socket.onopen = () => {
      console.log(coinKlines);
      
      socket.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: 
            coinKlines,
            // [
            //   "btcusdt@kline_1m"
            // ],
          id: 1,
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // console.log(data.e);
      // console.log(klineData);
      if (data.e === "kline") {
        const kline = data.k;
        console.log(kline);
        
  
        setKlineData((prevData) => {
          const existingIndex = prevData.findIndex(
            (item) => item.s.toLowerCase() === kline.s.toLowerCase()
          );
          
          

          if (existingIndex !== -1) {
            // İsim aynı ise veriyi güncelle
            prevData[existingIndex] = kline;
            return [...prevData];
          } else {
            // İsim aynı değilse yeni veriyi ekle
            return [...prevData, kline];
          }
        
        });
      }
    };
  return () => {
    socket.close()
  }
  }, [coins,klineInterval]);
  function calculatePriceDif(openPrice:number, closePrice:number) {
    // Fark yüzdesini hesapla
    const priceDifferencePercentage = ((closePrice - openPrice) / openPrice) * 100;
    return priceDifferencePercentage;
  }
  
  

  const columns: TableColumn<KlineData>[] = [
    {
        name: 'Symbol',
        selector: row => row.s,
        sortable: true,
    },
    {
        name: 'Timestamp',
        selector: row => new Date(row.t).toLocaleString(),
        sortable: true,
    },
    {
        name: 'Open',
        selector: row => row.o,
        sortable: true,
    },
    {
      name: 'Close',
      selector: row => row.c,
      sortable: true,
  },
  {
    name: 'High',
    selector: row => row.h,
    sortable: true,
},
{
  name: 'Low',
  selector: row => row.l,
  sortable: true,
},
{
  name: "Change %",
  selector: row => calculatePriceDif(Number(row.o), Number(row.c)).toFixed(2),
  sortable:true,
  conditionalCellStyles:
  [{
    when: row => calculatePriceDif(Number(row.o), Number(row.c)) < 0,
    style: {
      
      color: 'red',
      
    },
  },
  {
    when: row => calculatePriceDif(Number(row.o), Number(row.c)) > 0,
    style: {
      
      color: 'green',
      
    },
  }
]
}
];


  
   

      // <div className="column">
        
      //   <Table>
      //     <thead>
      //       <tr>
      //         <th>Symbol</th>
      //         <th>Timestamp</th>
      //         <th>Open</th>
      //         <th>Close</th>
      //         <th>High</th>
      //         <th>Low</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {data.map((kline, index) => (
      //         <tr key={index}>
      //           <td>{kline.s}</td>
      //           <td>{new Date(kline.t).toLocaleString()}</td>
      //           <td>{kline.o}</td>
      //           <td>{kline.c}</td>
      //           <td>{kline.h}</td>
      //           <td>{kline.l}</td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </Table>
      // </div>
    
  

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
      <Col xs sm="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Predefined Market</Form.Label>
              <Form.Select
                onChange={onChangeInterval}
              >
                 
                  <option key="1" value="1m">
                    1 minute
                  </option>
                  <option key="2" value="1h">
                    1 hour
                  </option>
                  <option key="3" value="4h">
                    4 hours
                  </option>
                  <option key="4" value="1d">
                    1 day
                  </option>
                
              </Form.Select>
            </Form.Group>
          </Col>
          <Form.Group className="mb-3">
          <Form.Label>Filter</Form.Label>
          <Form.Control
            type="text"
            value={filterText}
            onChange={handleFilter}
            placeholder="Filter by symbol"
          />
        </Form.Group>
      </div>
      <div className="columns">
      <DataTable columns={columns} data={filteredItems} />

      </div>
    </div>
  );
};

export default MarketTable;