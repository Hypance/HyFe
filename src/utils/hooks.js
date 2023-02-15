import { useState, useEffect, useCallback } from "react";

import { getSymbols, findByValue } from "../utils";
import { CRYPTOCURRENCIES } from "../configs";


const useTicker = () => {
  // TODO: Fetch crypto using Binance API and map it out.
  // For this example, we will fetch the data every 5 seconds. In future, we will do the same job by using the Web Sockets API.
  // More improvements and features are on your way.
  // Stay tuned.

  const [cryptoCurrencies, setCrpytoCurrencies] = useState(CRYPTOCURRENCIES)

  const fetchCrypto = useCallback (async () => {
    try {

      // getSymbols will return all the symbols from the CYPYPTOCURRENCIES array
      // i. g [ETCUSDC, SOLUSDC, BTCUSD]

      const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify
        (getSymbols()
        )}`
        );

      const data = await response.json();

      setCrpytoCurrencies(
        cryptoCurrencies.map((item) => {
          const {lastPrice,lowPrice,highPrice} = findByValue(data, item.symbol) || {};

          return {
            ...item,
            highPrice,
            lowPrice,
            price: lastPrice,
            prevPrice: item?.price || 0,
          };
        })
      );

      console.log(data)

    } catch (error) {
      console.log(error);
    }
  },[cryptoCurrencies]);

  useEffect(() => {
    const interval = setInterval(fetchCrypto, 5000);

    return () => clearInterval(interval);
  });

  return cryptoCurrencies;
  
};

export { useTicker };