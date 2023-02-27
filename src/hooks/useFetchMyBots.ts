import { useState, useEffect } from "react";
import { IMyBot } from "../models/IMyBot";
import {  botServiceGetAllMyBots } from "../services/botService/botService";

export const useFetchMyBots = () => {
  const [myBots, setMyBots] = useState([] as IMyBot[]);

  const getMyBots = async () => {
    const { data } = await botServiceGetAllMyBots();
    setMyBots(data);
  };

  useEffect(() => {
    getMyBots();
  }, []);

  return myBots;
};
