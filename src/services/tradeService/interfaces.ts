export interface tradeServiceOpenTrade {
  Id: number
  Coin: Coin
  EntryPrice: number
  Connection: WebSocket
  OnMessage:any
  CurrentPrice: number|undefined
  Profit: number
  Graph: any
}

interface Coin {
  Image: string
  BaseAsset: String
  QuoteAsset: String
  Name: string
}

export interface KlineHeader {
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
