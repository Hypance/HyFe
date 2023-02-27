import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import {  botServiceGetAllTrendStrategy} from "../services/botService/botService";

export const useFetchTrendStrategy = () => {
  const [trendStrategy, setTrendStrategy] = useState([] as ISelectListItem[]);

  const getTrendStrategy = async () => {
    const { data } = await botServiceGetAllTrendStrategy();
    setTrendStrategy(data);
  };

  useEffect(() => {
    getTrendStrategy();
  }, []);

  return trendStrategy;
};
