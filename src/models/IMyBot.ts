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