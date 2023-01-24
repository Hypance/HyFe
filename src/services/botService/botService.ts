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
//   export const botServiceGetAllInterval = async ()
//   : Promise<AxiosResponse<ISelectListItem[]>> => {
//     return $api.get(BOT_URLS.GET_INTERVALS);
//   };