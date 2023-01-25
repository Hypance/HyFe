import { AxiosResponse } from "axios";
import $api from "../../http";
import { TRADES_URLS } from "../../mock/constants";
import { tradeServiceOpenTrade } from "./interfaces";

  export const tradeServiceGetAllOpenTrades = async ()
  : Promise<AxiosResponse<tradeServiceOpenTrade[]>> => {
    return $api.get(TRADES_URLS.GET_ALL_OPEN_TRADES);
  };