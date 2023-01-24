import { AxiosResponse } from "axios";
import $api from "../../http";
import { BOT_URLS } from "../../mock/constants";
import { ICreateBot } from "../../models/ICreateBot";
import { ISelectListItem } from "../../models/ISelectListItem";
import { botServiceCreateBotInput } from "./interfaces";

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
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(BOT_URLS.GET_STRATEGY);
  };