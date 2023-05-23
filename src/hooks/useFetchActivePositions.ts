import { useState, useEffect } from "react";
import { dashboardServiceGetActivePositions } from "../services/dashboardService/dashboardService";
import { IActivePosition } from "../services/dashboardService/interfaces";


export const useFetchActivePositions = () => {
  const [activePositions, setActivePositions] = useState([] as IActivePosition[]);

  const getActivePositions = async () => {
    const { data } = await dashboardServiceGetActivePositions();
    setActivePositions(data);
  };

  useEffect(() => {
    getActivePositions();
  }, []);

  return activePositions;
};
