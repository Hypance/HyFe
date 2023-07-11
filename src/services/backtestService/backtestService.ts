import { Axios, AxiosResponse } from "axios";
import $api from "../../http";
import { BACKTEST_URLS } from "../../mock/constants";
import { backtestServiceBacktestDetail, IBacktest } from "./interfaces";


export const backtestServiceGetAllBacktests = async ()
: Promise<AxiosResponse<IBacktest[]>> => {
  return $api.get(BACKTEST_URLS.GET_ALL_BACKTESTS);
};

export const backtestServiceGetBacktestDetail = async ()
: Promise<AxiosResponse<backtestServiceBacktestDetail[]>> => {
  return $api.get(BACKTEST_URLS.GET_BACKTEST_DETAIL);
};

export const backtestServiceDeleteMyBacktest = async (backtestId:number):
Promise<AxiosResponse<IBacktest[]>> => {
  return $api.delete(`${BACKTEST_URLS.GET_ALL_BACKTESTS}/${backtestId}`)
};

export const backtestServiceUpdateBacktestStatus = async (backtestId:number, isActive:boolean)
:Promise<AxiosResponse<{isActive: boolean}>> => {
  return $api.patch(`${BACKTEST_URLS.GET_ALL_BACKTESTS}/${backtestId}`, {
    isActive: isActive
  })
}