import { useState, useEffect } from "react";
import { tradeServiceOpenTrade } from "../services/tradeService/interfaces";
import { tradeServiceGetAllOpenTrades } from "../services/tradeService/tradeService";

export const useFetchOpenTrades = () => {
  const [openTrades, setOpenTrades] = useState([] as tradeServiceOpenTrade[]);

  const getOpenTrades = async () => {
    const { data } = await tradeServiceGetAllOpenTrades();
    setOpenTrades(data);
  };

  useEffect(() => {
    getOpenTrades();
  }, []);

  return openTrades;
};
