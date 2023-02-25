import {ICreateStrategy} from '../../models/ICreateStrategy'

export type StrategyFormInputs =
{
    name:string,
    description:string,
    provision:string,
    value2:number,
    period:number,
    indicator:number,
    value:number,
    interval:number,
    orderSignal:number
}

export interface CreateStrategy{
    isEdit?:boolean,
    strategy?:ICreateStrategy
}