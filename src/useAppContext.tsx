import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextProps {
  dolarValue: string;
  taxValue: string;
  paymentMethod: "cash" | "card";
  result: number;
  iofTaxValue: number;
  updateDolarValue: (newValue: string) => void;
  updateTaxValue: (newValue: string) => void;
  handlePaymentMethod: (paymentMethod: "cash" | "card") => void;
  handleResult: (newResult: number) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [dolarValue, setDolarValue] = useState<string>("");
  const [taxValue, setTaxValue] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");
  const [result, setResult] = useState<number>(0);

  const iofTaxValue = paymentMethod === "card" ? 0.064 : 0.011;

  const updateDolarValue = (newDolarValue: string) =>
    setDolarValue(newDolarValue);

  const updateTaxValue = (newTaxValue: string) => setTaxValue(newTaxValue);

  const handlePaymentMethod = (paymentMethod: "cash" | "card") => {
    setPaymentMethod(paymentMethod);
  };

  const handleResult = (newResult: number) => setResult(newResult);

  return (
    <AppContext.Provider
      value={{
        dolarValue,
        taxValue,
        paymentMethod,
        result,
        iofTaxValue,
        updateDolarValue,
        updateTaxValue,
        handlePaymentMethod,
        handleResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
