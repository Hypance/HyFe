import { useState, useEffect } from "react";
import { dashboardServiceGetDashboardAssets } from "../services/dashboardService/dashboardService";
import { IDashboardAsset } from "../services/dashboardService/interfaces";


export const useFetchDashboardAssets = () => {
  const [dashboardAssets, setDashboardAssets] = useState([] as IDashboardAsset[]);

  const getDashboardAssets = async () => {
    const { data } = await dashboardServiceGetDashboardAssets();
    setDashboardAssets(data);
  };

  useEffect(() => {
    getDashboardAssets();
  }, []);

  return dashboardAssets;
};
