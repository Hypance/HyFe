export interface IMyBot{
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

export interface IEditMyBot{
    id:number,
    name:string,
    description:string,
    totalEntryPrice:number,
    isActive:boolean,
    strategy:Array<string>,
    formation:string,
    assets:Array<string>,
    trendStrategy:string,
    tradeType:string,
    priceStrategy:string,
    predefinedMarket:string
    
}

