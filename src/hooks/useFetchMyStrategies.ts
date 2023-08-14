import { useState, useEffect } from "react";
import { IMyStrategy } from "../models/IMyStrategy";
import { strategyServiceGetMyStrategies } from "../services/strategyService/strategyService";

export const useFetchMyStrategies = () => {
  const [allMyStrategies, setAllMyStrategies] = useState<IMyStrategy[] | null>(null);
  const [myStrategies, setMyStrategies] = useState([] as IMyStrategy[]);
  const [page, setPage] = useState(0); 
  const [hasMore, setHasMore] = useState(true);
  const PAGE_SIZE = 8;
  // console.log("myStrategies length:", myStrategies.length);
  // console.log("hasMore:", hasMore);
  
  useEffect(() => {
    const getMyStrategy = async () => {
      try {
        const { data } = await strategyServiceGetMyStrategies();
        setAllMyStrategies(data); // API'den gelen tüm veriyi sakla
        const firstPageData = data.slice(0, PAGE_SIZE);
        setMyStrategies(firstPageData);
        if (firstPageData.length < PAGE_SIZE) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching strategies:", error);
        setAllMyStrategies([]); // API'den veri alınmazsa boş dizi olarak ayarla
      }
    };
    getMyStrategy();
  }, []);

  const fetchMoreData = async  () => {
    if (!hasMore || allMyStrategies === null) {
      return;
    }
      const nextPage =  page + 1;
      
      // allBacktests state'ini kullanarak sonraki sayfanın verilerini al
      const nextPageData = allMyStrategies.slice(nextPage * PAGE_SIZE, (nextPage + 1) * PAGE_SIZE);
      // console.log(nextPageData);
      // Eğer daha fazla sayfa yoksa, hasMore durumunu güncelle
      if (nextPageData.length < PAGE_SIZE) {
      
        
         setHasMore(false);
      }
      // Sonraki sayfanın verilerini mevcut verilere ekle
      setMyStrategies((prevMyStrategies) => [...prevMyStrategies, ...nextPageData]);
      setPage(nextPage);
      
    };
    // useEffect(() => {
    //   if (hasMore && myStrategies.length < allMyStrategies.length) {
    //     fetchMoreData();
    //   }
    // }, [hasMore, myStrategies.length]);
    
  

  

  

  // const fetchMyStrategies = async () => {
  //   if (!hasMore || loading) return;
  //   setLoading(true);
  //   try {
  //     const { data } = await strategyServiceGetMyStrategies(currentPage, strategiesPerPage);
  //     if (data.length < strategiesPerPage) {
  //       setHasMore(false);
  //     }
  //     setMyStrategies((prevStrategies) => [...prevStrategies, ...data]);
  //     setCurrentPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     console.error("Error fetching strategies:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop >=
  //     document.documentElement.offsetHeight - 100
  //   ) {
  //     fetchMyStrategies();
  //   }
  // };

  // useEffect(() => {
  //   fetchMyStrategies();
  // }, [strategiesPerPage]); // Fetch initial strategies when the hook is first used or strategiesPerPage changes

  // useEffect(() => {
  //   // Attach event listener to trigger loading more strategies when scrolling
  //   if (hasMore) {
  //     window.addEventListener("scroll", handleScroll);
  //   } else {
  //     // If hasMore is false, remove the event listener
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hasMore]);

  return {allMyStrategies,myStrategies, fetchMoreData, hasMore, setMyStrategies};
};