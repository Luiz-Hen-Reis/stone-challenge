import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface CurrencyData {
  USDBRL: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  };
}

const API_URL = "http://economia.awesomeapi.com.br/json/last/USD-BRL";

const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data as CurrencyData;
};

export function useCurrency() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["currency-data"],
  });

  return {
    ...query,
    data: query.data,
  };
}
