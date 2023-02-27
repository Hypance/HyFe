import { useState, useEffect } from "react";
import { IIndicator } from "../models/IIndicator";
import { strategyServiceGetAllIndicators} from "../services/strategyService/strategyService";

export const useFetchIndicators = () => {
  const [indicators, setIndicators] = useState([] as IIndicator[]);

  const getIndicators = async () => {
    const { data } = await strategyServiceGetAllIndicators();
    setIndicators(data);
  };

  useEffect(() => {
    getIndicators();
  }, []);

  return indicators;
};
