import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { strategyServiceGetAllValue} from "../services/strategyService/strategyService";

export const useFetchValue = () => {
  const [value, setValue] = useState([] as ISelectListItem[]);

  const getValue = async () => {
    const { data } = await strategyServiceGetAllValue();
    setValue(data);
  };

  useEffect(() => {
    getValue();
  }, []);

  return value;
};
