import { COIN_URLS } from "../../mock/constants";
import $api from "../../http";
import { AxiosResponse } from "axios";
import { coin } from "./interface";

export const coinServiceGetCoins = async () 
: Promise<AxiosResponse<coin[]>>  => {
    return $api.get(COIN_URLS.GET_COINS);
}