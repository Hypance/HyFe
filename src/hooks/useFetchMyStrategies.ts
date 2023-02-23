import { useState, useEffect } from "react";
import { IMyStrategy } from "../models/IMyStrategy";
import { strategyServiceGetMyStrategies } from "../services/strategyService/strategyService";

export const useFetchMyStrategies = () => {
  const [myStrategies, setMyStrategies] = useState([] as IMyStrategy[]);

  const getMyStrategies = async () => {
    const { data } = await strategyServiceGetMyStrategies();
    setMyStrategies(data);
  };

  useEffect(() => {
    getMyStrategies();
  }, []);

  return myStrategies;
};
