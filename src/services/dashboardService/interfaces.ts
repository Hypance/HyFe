export interface ITransaction {
    id: number
    orderSignal: string
    date: string
    coin: Coin
  }
  interface Coin {
    image: string
    abbreviation: string
    name: string
    value1: number
    value2: number
  }

export interface IDashboardAsset{
  Id: number
  Coin: AssetsCoin
  EntryPrice: number
  CurrentPrice: number|undefined
  Profit: number
  Graph: any
}

interface AssetsCoin {
  Image: string
  BaseAsset: String
  QuoteAsset: String
  Name: string
}

export interface IActivePosition{
    name:any
    

}