import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllAssets } from "../services/botService/botService";

export const useFetchAssets = () => {
  const [assets, setAssets] = useState([] as ISelectListItem[]);

  const getAssets = async () => {
    const { data } = await botServiceGetAllAssets();
    setAssets(data);
  };

  useEffect(() => {
    getAssets();
  }, []);

  return assets;
};
