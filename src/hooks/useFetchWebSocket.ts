import { useState } from 'react';

// export const useFetchWebSocket = (pair: string) => {
//   const socketUrl = `wss://fstream.binance.com/ws/${pair}@kline_1m`
//   const { lastJsonMessage, readyState } = useWebSocket(socketUrl)

//   if (readyState === Number(ReadyState.OPEN)) {
//     if (lastJsonMessage != null) {
//       const object = lastJsonMessage as unknown as KlineHeader;
//       if (object) {
//         return object.k.c;
//       }
//     }
//   }
// }

export const useFetchWebSocket = (pair: string) => {
  const socketUrl = `wss://fstream.binance.com/ws/${pair}@kline_1m`
  const [currentPrice, setCurrentPrice] = useState(0)
  const connection = new WebSocket(socketUrl);
  connection.onmessage = function(event:any) {
    const object = JSON.parse(event.data) as KlineHeader;
    setCurrentPrice(object.k.c);
  };
  return currentPrice;
}

interface KlineHeader {
  e: string
  E: Date
  s: string
  k: {
    t: Date, // Kline start time
    T: Date, // Kline close time
    s: string,  // Symbol
    i: string,      // Interval
    f: number,       // First trade ID
    L: number,       // Last trade ID
    o: number,  // Open price
    c: number,  // Close price
    h: number,  // High price
    l: number,  // Low price
    v: number,    // Base asset volume
    n: number,       // Number of trades
    x: boolean,     // Is this kline closed?
    q: number,  // Quote asset volume
    V: number,     // Taker buy base asset volume
    Q: number,   // Taker buy quote asset volume
    B: number   // Ignore
  }
}
