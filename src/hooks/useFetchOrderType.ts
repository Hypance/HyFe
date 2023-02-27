import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllOrderType } from "../services/botService/botService";

export const useFetchOrderType = () => {
  const [orderType, setOrderType] = useState([] as ISelectListItem[]);

  const getOrderType = async () => {
    const { data } = await botServiceGetAllOrderType();
    setOrderType(data);
  };

  useEffect(() => {
    getOrderType();
  }, []);

  return orderType;
};
