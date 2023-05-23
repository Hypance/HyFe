import { useState, useEffect } from "react";
import { dashboardServiceGetTransactions } from "../services/dashboardService/dashboardService";
import { ITransaction } from "../services/dashboardService/interfaces";


export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([] as ITransaction[]);

  const getTransactions = async () => {
    const { data } = await dashboardServiceGetTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return transactions;
};
