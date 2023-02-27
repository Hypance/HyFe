export interface tradeServiceOpenTrade {
  Id: number
  Coin: Coin
  EntryPrice: number
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
