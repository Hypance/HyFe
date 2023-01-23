import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { stratgeyServiceGetAllInterval } from "../services/strategyService/strategyService";

export const useFetchIntervals = () => {
  const [intervals, setIntervals] = useState([] as ISelectListItem[]);

  const getIntervals = async () => {
    const { data } = await stratgeyServiceGetAllInterval();
    setIntervals(data);
  };

  useEffect(() => {
    getIntervals();
  }, []);

  return intervals;
};
