import { useState, useEffect } from "react";
import { backtestServiceBacktestDetail} from "../services/backtestService/interfaces";
import { backtestServiceGetBacktestDetail } from "../services/backtestService/backtestService";

export const useFetchBacktestDetail = () => {
  const [backtestDetail, setBacktestDetail] = useState([] as backtestServiceBacktestDetail[]);

  const getBacktestDetail = async () => {
    const { data } = await backtestServiceGetBacktestDetail();
    setBacktestDetail(data);
  };

  useEffect(() => {
    getBacktestDetail();
  }, []);

  return backtestDetail;
};
