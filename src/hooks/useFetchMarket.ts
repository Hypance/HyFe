import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllMarket } from "../services/botService/botService";

export const useFetchMarkets = () => {
  const [markets, setMarkets] = useState([] as ISelectListItem[]);

  const getMarkets = async () => {
    const { data } = await botServiceGetAllMarket();
    setMarkets(data);
  };

  useEffect(() => {
    getMarkets();
  }, []);

  return markets;
};
