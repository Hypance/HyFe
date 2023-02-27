import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { strategyServiceGetAllIndicators} from "../services/strategyService/strategyService";

export const useFetchIndicators = () => {
  const [indicators, setIndicators] = useState([] as ISelectListItem[]);

  const getIndicators = async () => {
    const { data } = await strategyServiceGetAllIndicators();
    setIndicators(data);
  };

  useEffect(() => {
    getIndicators();
  }, []);

  return indicators;
};
