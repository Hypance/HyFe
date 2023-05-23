import { useState, useEffect } from "react";
import { UserSettingsFormInputs } from "../components/UserSettingsForm/interface";
import { userServiceGetUserSettings } from "../services/userService/userService";

export const useFetchUserSettings = () => {
  const [userSettings, setUserSettings] = useState({} as UserSettingsFormInputs );


  const getUserSettings = async () => {
    const { data } = await userServiceGetUserSettings();
    const test:UserSettingsFormInputs={
      email:data.email,
      telegramToken:data.telegramToken,
      password:data.password,
      telegramChannelId:data.telegramChannelId,
      phone:data.phone
    }
    setUserSettings(test);
  };

  useEffect(() => {
    getUserSettings();
  }, []);

  return userSettings;
};
