import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useFetchCoins } from "../../hooks/useFetchCoins";

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
  const coins = useFetchCoins();
  let coinKlines = coins.map((c)=>{return `${c.name.toLowerCase()}@kline_1m`})
  // console.log(coinKlines);
  
  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws");

    socket.onopen = () => {
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
      console.log(klineData);
      if (data.e === "kline") {
        const kline = data.k;
  
        let kData = klineData.find(k=>k.s.toLowerCase()==kline.s.toLowerCase())
        
        
        
        if(kData !== undefined) {
          console.log(kData.s + " "+kline.s);
          console.log("deneme");
          
          kData.o = kline.o;
          kData.c = kline.c;
          kData.h = kline.h;
          kData.l = kline.l;
          setKlineData((prevData)=> prevData.filter(e =>{
            if(e.s !==data.k.s){
              console.log(e);
              
              return e;
            } else if(e.s == data.k.s){
    
              e.o=data.k.o;
              console.log(e);
              
              return e;
            } else{
              return e;
            }
          }))
        } else{
          setKlineData((prevData) => [...prevData, kline]);
        }
       
      }
    };

    return () => {
      socket.close();
    };
  }, [coins]);

  

  const renderKlineColumn = (data: KlineData[], title: string) => {
    return (
      <div className="column">
        <h2>{title}</h2>
        <Table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Timestamp</th>
              <th>Open</th>
              <th>Close</th>
              <th>High</th>
              <th>Low</th>
            </tr>
          </thead>
          <tbody>
            {data.map((kline, index) => (
              <tr key={index}>
                <td>{kline.s}</td>
                <td>{new Date(kline.t).toLocaleString()}</td>
                <td>{kline.o}</td>
                <td>{kline.c}</td>
                <td>{kline.h}</td>
                <td>{kline.l}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Kline Data Table</h1>
      <div className="columns">
        {renderKlineColumn(klineData, "1 Minute (1m)")}

      </div>
    </div>
  );
};

export default MarketTable;