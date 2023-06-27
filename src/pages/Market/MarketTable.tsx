import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

interface MarketData {
  symbol: string;
  priceChangePercent: number;
  volume: number;
  closePrice: string;
}

const MarketTable = () => {
  const [marketData, setMarketData] = useState<{ [symbol: string]: MarketData }>({});

  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws");

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: ["btcusdt@ticker", "bnbusdt@ticker", "xrpusdt@ticker"],
          id: 1,
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.e === "24hrTicker") {
        setMarketData((prevData) => ({
          ...prevData,
          [data.s]: {
            symbol: data.s,
            priceChangePercent: data.P,
            volume: data.v,
            closePrice: data.c
          },
        }));
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Table</h1>
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Change</th>
            <th>Volume</th>
            <th>Close Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(marketData).map((data, index) => (
            <tr key={index}>
              <td>{data.symbol}</td>
              <td>{data.priceChangePercent}</td>
              <td>{data.volume}</td>
              <td>{data.closePrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MarketTable;