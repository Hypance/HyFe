import { AxiosResponse } from "axios";
import $api from "../../http";
import { BOT_URLS } from "../../mock/constants";
import { ICreateBot } from "../../models/ICreateBot";
import { IMyBot } from "../../models/IMyBot";
import { ISelectListItem } from "../../models/ISelectListItem";
import { botServiceCreateBotInput } from "./interfaces";
import { IMyStrategy } from "../../models/IMyStrategy";

export const botServiceCreateBot = async (
    data: botServiceCreateBotInput
  ): Promise<AxiosResponse<ICreateBot>> => {
    return $api.post(BOT_URLS.CREATE_BOT, data);
  };
  export const botServiceGetAllMarket = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_MARKETS);
  };
  export const botServiceGetAllOrderType = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_ORDERTYPE);
  };
  export const botServiceGetAllStrategy = async ()
  : Promise<AxiosResponse<IMyStrategy[]>> => {
    return $api.get(BOT_URLS.GET_STRATEGY);
  };
  export const botServiceGetAllAssets = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_ASSETS);
    
  };
  export const botServiceGetAllFormation = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_FORMATION);
  };
  export const botServiceGetAllTrendStrategy = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_TRENDSTRATEGY);
  };
  export const botServiceGetAllPriceStrategy = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_PRICESTRATEGY);
  };
  export const botServiceGetAllBot = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_MYBOTS);
  };

  export const botServiceGetAllMyBots = async ()
  : Promise<AxiosResponse<IMyBot[]>> => {
    return $api.get(BOT_URLS.GET_MYBOTS);
  };

  export const botServiceDeleteMyBot = async (botId:number)
  :Promise<AxiosResponse<IMyBot[]>> => {
    return $api.delete(`${BOT_URLS.GET_MYBOTS}/${botId}`);
  };

  export const botServiceUpdateBotStatus = async (botId: number, isActive: boolean)
  :Promise<AxiosResponse<{isActive: boolean}>> => {
    return $api.patch(`${BOT_URLS.GET_MYBOTS}/${botId}`, {
      isActive: isActive
    });
  }

    export const botServiceGetMyBotById = async (botId:any)
  : Promise<AxiosResponse> => {
    return $api.get(`${BOT_URLS.GET_BOT}/${botId}`);
  }


