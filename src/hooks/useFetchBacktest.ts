import { useState, useEffect } from "react";
import { IBacktest } from "../services/backtestService/interfaces";
import { backtestServiceGetAllBacktests } from "../services/backtestService/backtestService";

export const useFetchBacktest = () => {
  const [allBacktests, setAllBacktests] = useState([] as IBacktest[]); // API'den gelen tüm veriyi saklar
  const [backtests, setBacktests] = useState([] as IBacktest[]);
  const [page, setPage] = useState(0); 
  const [hasMore, setHasMore] = useState(true);
  const PAGE_SIZE = 9; 

  useEffect(() => {
    const getBacktests = async () => {
      const { data } = await backtestServiceGetAllBacktests();
      setAllBacktests(data); // API'den gelen tüm veriyi sakla
      const firstPageData = data.slice(0, PAGE_SIZE);
      setBacktests(firstPageData);
      if (firstPageData.length < PAGE_SIZE) {
        setHasMore(false);
      }
    };
    getBacktests();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    // allBacktests state'ini kullanarak sonraki sayfanın verilerini al
    const nextPageData = allBacktests.slice(nextPage * PAGE_SIZE, (nextPage + 1) * PAGE_SIZE);
    // Eğer daha fazla sayfa yoksa, hasMore durumunu güncelle
    if (nextPageData.length < PAGE_SIZE) {
      setHasMore(false);
    }
    // Sonraki sayfanın verilerini mevcut verilere ekle
    setBacktests((prevBacktests) => [...prevBacktests, ...nextPageData]);
    setPage(nextPage);
  };

  return { backtests, fetchMoreData, hasMore, setBacktests };
}