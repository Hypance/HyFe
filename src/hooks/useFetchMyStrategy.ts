import { useState, useEffect } from "react";
import { IMyStrategy } from "../models/IMyStrategy";
import {strategyServiceGetMyStrategyById } from "../services/strategyService/strategyService";

export const useFetchMyStrategy = (strategyId:any) => {
  const [myStrategy, setMyStrategy] = useState<IMyStrategy | null>(null);

  const getMyStrategy = async () => {
    const { data } = await strategyServiceGetMyStrategyById(strategyId);
    setMyStrategy(data);
  };

  useEffect(() => {
    getMyStrategy();
  }, []);

  return myStrategy;
};
