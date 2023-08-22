import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

interface KlineData {
  t: number;
  o: string;
  c: string;
  h: string;
  l: string;
}

const MarketTable = () => {
  const [klineData, setKlineData] = useState<KlineData[]>([]);

  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h/btcusdt@kline_4h/btcusdt@kline_1d");

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: ["btcusdt@kline_1h","btcusdt@kline_4h","btcusdt@kline_1d"],
          id: 1,
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.e === "kline") {
        const kline = data.k;
        setKlineData((prevData) => [...prevData, kline]);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const renderKlineColumn = (data: KlineData[], title: string) => {
    return (
      <div className="column">
        <h2>{title}</h2>
        <Table>
          <thead>
            <tr>
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
        {renderKlineColumn(klineData, "1 Hour (1h)")}
        {renderKlineColumn(klineData, "4 Hours (4h)")}
        {renderKlineColumn(klineData, "1 Day (1d)")}
      </div>
    </div>
  );
};

export default MarketTable;