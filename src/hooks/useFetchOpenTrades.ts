import { useState, useEffect } from "react";
import { tradeServiceOpenTrade } from "../services/tradeService/interfaces";
import { tradeServiceGetAllOpenTrades } from "../services/tradeService/tradeService";

export const useFetchOpenTrades = () => {
  const [openTrades, setOpenTrades] = useState([] as tradeServiceOpenTrade[]);

 const getOpenTrades = async () => {
  const updateTrade = (tradeId: number, newCurrentPrice: string) => {
    setOpenTrades(prevTrades => prevTrades.map(trade => 
      trade.Id === tradeId
        ? { ...trade, CurrentPrice: newCurrentPrice } 
        : trade
    ));
  };

  const { data } = await tradeServiceGetAllOpenTrades(updateTrade);
  setOpenTrades(data);
};

  useEffect(() => {
    getOpenTrades();
  }, []);

  return openTrades;
};