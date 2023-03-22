import { AxiosResponse } from "axios";
import $api from "../../http";
import { TRADES_URLS } from "../../mock/constants";
import { tradeServiceOpenTrade } from "./interfaces";

  export const tradeServiceGetAllOpenTrades = async ()
  : Promise<AxiosResponse<tradeServiceOpenTrade[]>> => {
    const result:AxiosResponse<tradeServiceOpenTrade[]> =await $api.get(TRADES_URLS.GET_ALL_OPEN_TRADES)
    console.log(result.data);
    result.data.map(s => {
       const pair = `${s.Coin.BaseAsset}${s.Coin.QuoteAsset}`.toLowerCase()
        const socketUrl = `wss://fstream.binance.com/ws`
        const ws = new WebSocket(socketUrl);
        ws.onopen = () => {
          ws.send(`{ "method": "SUBSCRIBE", "params": [ "${pair}@kline_1m" ], "id": 1 }`);
        };
        ws.onmessage = function(event:any) {
          const obj = JSON.parse(event.data);
          console.log(obj);
          if (obj.e) {
            const object = obj as KlineHeader;
            s.CurrentPrice = object.k.c;
          }
        };
        return s;
    });
    return result;
  };

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