import { useState, useEffect } from "react";
import { IMyBot } from "../models/IMyBot";
import { botServiceGetAllMyBots, botServiceGetMyBotById } from "../services/botService/botService";

export const useFetchMyBots = (botId:any) => {
  const [myBot, setMyBot] = useState<IMyBot | null>(null);
  const [allBots, setAllBots] = useState<IMyBot[]>([]);
  const [myBots, setMyBots] = useState<IMyBot[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 9;

  const getMyBot = async () => {
    const { data } = await botServiceGetMyBotById(botId);
    setMyBot(data);
  };

  useEffect(() => {
    const fetchBots = async () => {
      const { data } = await botServiceGetAllMyBots();
      setAllBots(data);
      const slicedData = data.slice(0, PAGE_SIZE);
      if (slicedData.length < PAGE_SIZE) {
        setHasMore(false);
      }
      setMyBots(slicedData);
    };
    fetchBots();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const slicedData = allBots.slice(nextPage * PAGE_SIZE, (nextPage + 1) * PAGE_SIZE);
    if (slicedData.length < PAGE_SIZE) {
      setHasMore(false);
    }
    setMyBots((prevBots) => [...prevBots, ...slicedData]);
    setPage(nextPage);
  };

  return { myBots, fetchMoreData, hasMore, setMyBots };
};