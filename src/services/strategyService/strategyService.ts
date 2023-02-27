import { AxiosResponse } from "axios";
import $api from "../../http";
import { STRATEGY_URLS } from "../../mock/constants";
import { ICreateStrategy } from "../../models/ICreateStrategy";
import { IIndicator } from "../../models/IIndicator";
import { ISelectListItem } from "../../models/ISelectListItem";
import { strategyServiceCreateStrategyInput } from "./interfaces";

export const strategyServiceCreateStrategy = async (
    data: strategyServiceCreateStrategyInput
  ): Promise<AxiosResponse<ICreateStrategy>> => {
    return $api.post(STRATEGY_URLS.CREATE_STRATEGY, data);
  };
  export const strategyServiceGetAllInterval = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(STRATEGY_URLS.GET_INTERVALS);
  };
  export const strategyServiceGetAllProvision = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(STRATEGY_URLS.GET_PROVISIONS);
  };

  export const strategyServiceGetMyStrategies = async ()
  : Promise<AxiosResponse> => {
    return $api.get(STRATEGY_URLS.GET_MY_STRATEGIES);
  };
    
  export const strategyServiceGetAllIndicators = async ()
  : Promise<AxiosResponse<IIndicator[]>> => {
    return $api.get(STRATEGY_URLS.GET_INDICATORS);
  };

  export const strategyServiceGetAllOrderSignal = async ()
  : Promise<AxiosResponse<ISelectListItem[]>> => {
    return $api.get(STRATEGY_URLS.GET_ORDERSIGNAL);
  };