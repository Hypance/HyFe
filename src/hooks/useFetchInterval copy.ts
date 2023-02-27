import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { strategyServiceGetAllProvision } from "../services/strategyService/strategyService";

export const useFetchProvisions = () => {
  const [provisions, setProvisions] = useState([] as ISelectListItem[]);

  const getProvisions = async () => {
    const { data } = await strategyServiceGetAllProvision();
    setProvisions(data);
  };

  useEffect(() => {
    getProvisions();
  }, []);

  return provisions;
};
