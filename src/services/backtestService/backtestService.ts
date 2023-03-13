import { AxiosResponse } from "axios";
import $api from "../../http";
import { BACKTEST_URLS } from "../../mock/constants";
import { IBacktest } from "./interfaces";


export const backtestServiceGetAllBacktests = async ()
: Promise<AxiosResponse<IBacktest[]>> => {
  return $api.get(BACKTEST_URLS.GET_ALL_BACKTESTS);
};