import { useState, useEffect } from "react";
import { ISelectListItem } from "../models/ISelectListItem";
import { botServiceGetAllFormation } from "../services/botService/botService";

export const useFetchFormation = () => {
  const [formation, setFormation] = useState([] as ISelectListItem[]);

  const getFormation = async () => {
    const { data } = await botServiceGetAllFormation();
    setFormation(data);
  };

  useEffect(() => {
    getFormation();
  }, []);

  return formation;
};
