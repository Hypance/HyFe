import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllPriceStrategy } from "../services/botService/botService";

export const useFetchPriceStrategy = () => {
  const [priceStrategy, setPriceStrategy] = useState([] as ISelectListItem[]);

  const getPriceStrategy = async () => {
    const { data } = await botServiceGetAllPriceStrategy();
    setPriceStrategy(data);
  };

  useEffect(() => {
    getPriceStrategy();
  }, []);

  return priceStrategy;
};
