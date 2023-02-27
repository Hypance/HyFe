import React from "react";

import Crypto from "../Crypto/Crypto";
import { useTicker } from "../../utils/hooks";

export default function Ticker() {

  const cryptoCurrencies = useTicker();

  console.log('cryptoCurrencies:', cryptoCurrencies);
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cryptoCurrencies?.map((crypto) => (
        <Crypto key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}
