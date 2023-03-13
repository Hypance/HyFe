import { AxiosResponse } from "axios";
import $api from "../../http";
import { DASHBOARD_URLS } from "../../mock/constants";
import { ITransaction } from "./interfaces";
import { IDashboardAsset } from "./interfaces";
import {IActivePosition} from "./interfaces"

   const dashboardServiceGetTransactions = async ()
  : Promise<AxiosResponse<ITransaction[]>> => {
    return $api.get(DASHBOARD_URLS.GET_TRANSACTIONS);
  };

   const dashboardServiceGetDashboardAssets = async ()
  : Promise<AxiosResponse<IDashboardAsset[]>> => {
    return $api.get(DASHBOARD_URLS.GET_DASHBOARD_ASSETS);
  };

   const dashboardServiceGetActivePositions = async ()
  : Promise<AxiosResponse<IActivePosition[]>> => {
    return $api.get(DASHBOARD_URLS.GET_ACTIVE_POSITIONS);
  };


  export {dashboardServiceGetTransactions,dashboardServiceGetDashboardAssets,dashboardServiceGetActivePositions}