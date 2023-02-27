import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllStrategy } from "../services/botService/botService";

export const useFetchStrategy = () => {
  const [strategy, setStrategy] = useState([] as ISelectListItem[]);

  const getStrategy = async () => {
    const { data } = await botServiceGetAllStrategy();
    setStrategy(data);
  };

  useEffect(() => {
    getStrategy();
  }, []);

  return strategy;
};
