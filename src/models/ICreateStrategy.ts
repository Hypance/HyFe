export interface ICreateStrategy{
    id:number,
    name:string,
    description:string,
    signalName:string,
    period:number,
    indicator:number,
    value:number,
    interval:number,
    orderSignal:number
}