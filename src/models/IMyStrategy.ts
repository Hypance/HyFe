export interface IMyStrategy{
    id:number,
    name:string,
    description:string,
    orderSignal:string,
    interval:string,
    signals:Array<Signal> 
}

interface Signal{
    period:number,
    rule:string,
    indicator:string,
    value:number
}

