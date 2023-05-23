import { AxiosResponse } from "axios";
import { UserSettingsFormInputs } from "../../components/UserSettingsForm/interface";
import $api from "../../http";
import { USER_URLS } from "../../mock/constants";
import { IUserSettings } from "../../models/IUserSettings";

  export const userServiceGetUserSettings = async ()
  : Promise<AxiosResponse<IUserSettings>> => {
    return $api.get(USER_URLS.GET_USER_SETTINGS);
  };
  export const userServiceUpdateUserSettings = async (data:UserSettingsFormInputs)
  :Promise<AxiosResponse<IUserSettings>> => {
    return $api.post(USER_URLS.POST_USER_SETTINGS,data);
  }