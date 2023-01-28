export interface tradeServiceOpenTrade {
  Id: number
  Coin: Coin
  EntryPrice: number
  CurrentPrice: number
  Profit: number
  Graph: any
}

interface Coin {
  Image: string
  ShortName: String
  Name: string
}
