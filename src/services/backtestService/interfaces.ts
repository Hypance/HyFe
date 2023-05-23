export interface IBacktest{
    id:number,
    name:string,
    description:string,
    totalEntryPrice:number,
    isActive:boolean,
    strategies:Array<Strategy>,
    assets:Array<Asset>

}
interface Strategy{
    name:string,
    interval:string
}

interface Asset{
    image:string
}

export interface backtestServiceBacktestDetail {
    id: number
    assetName: AssetName
    entryPrice: number
    closePrice: number|undefined
    profit: number
    
  }
  
  interface AssetName {
    image: string
    name: string
  }


