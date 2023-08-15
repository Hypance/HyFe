import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllStrategy } from "../services/botService/botService";
import { IMyStrategy } from "../models/IMyStrategy";
export const useFetchStrategy = () => {
  const [strategy, setStrategy] = useState([] as ISelectListItem[]);

  const getStrategy = async () => {
    const { data } = await botServiceGetAllStrategy();
    const updatedData: ISelectListItem[] = data.map((d) => ({
      text: d.name,
      name: d.name,
      value: d.id.toString()
    }));
    setStrategy(updatedData);
  };

  useEffect(() => {
    getStrategy();
  }, []);

  return strategy;
};
