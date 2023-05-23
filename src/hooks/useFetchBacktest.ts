import { useState, useEffect } from "react";
import { IBacktest } from "../services/backtestService/interfaces";
import {  backtestServiceGetAllBacktests } from "../services/backtestService/backtestService";

export const useFetchBacktest = () => {
  const [backtests, setBacktests] = useState([] as IBacktest[]);

  const getBacktests = async () => {
    const { data } = await backtestServiceGetAllBacktests();
    setBacktests(data);
  };

  useEffect(() => {
    getBacktests();
  }, []);

  return backtests;
};
