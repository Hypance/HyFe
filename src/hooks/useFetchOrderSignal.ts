import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { strategyServiceGetAllOrderSignal } from "../services/strategyService/strategyService";

export const useFetchOrderSignal = () => {
  const [orderSignals, setOrderSignals] = useState([] as ISelectListItem[]);

  const getOrderSignals = async () => {
    const { data } = await strategyServiceGetAllOrderSignal();
    setOrderSignals(data);
  };

  useEffect(() => {
    getOrderSignals();
  }, []);

  return orderSignals;
};
