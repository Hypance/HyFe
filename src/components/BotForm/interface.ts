import {ICreateBot} from '../../models/ICreateBot'

export type BotFormInputs =
{
    name:string,
    description:string,
    predefinedMarket:string,
    priceStrategy:number,
    tradeType:string,
    assets:string,
    strategy:string,
    formation:string,
    trendStrategy:string,
    priceVolume:number,
}

export interface CreateBot{
    isEdit?:boolean,
    bot?:ICreateBot
}