import { useState, useEffect } from "react";
import { IEditMyBot } from "../models/IMyBot";
import { botServiceGetMyBotById } from "../services/botService/botService";

export const useFetchMyBot = (botId:any) => {
  const [myBot, setMyBot] = useState<IEditMyBot | null>(null);

  const getMyBot = async () => {
    const { data } = await botServiceGetMyBotById(botId);
    setMyBot(data);
  };


  useEffect(() => {
    getMyBot();
  }, []);


  return myBot ;
};