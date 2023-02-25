import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { strategyServiceGetAllInterval } from "../services/strategyService/strategyService";

export const useFetchIntervals = () => {
  const [intervals, setIntervals] = useState([] as ISelectListItem[]);

  const getIntervals = async () => {
    const { data } = await strategyServiceGetAllInterval();
    setIntervals(data);
  };

  useEffect(() => {
    getIntervals();
  }, []);

  return intervals;
};
