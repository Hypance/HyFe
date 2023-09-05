import { useEffect, useState } from "react"
import { coinServiceGetCoins } from "../services/coinService/coinService";
import { coin } from "../services/coinService/interface";

export const useFetchCoins = () =>{
    const [coins, setCoins] = useState([] as coin[]);

    const getCoins =async () =>{
        const request = await coinServiceGetCoins();
        setCoins(request.data);
    }
    useEffect(()=>{
        getCoins();
    },[])
    return coins;
} 
