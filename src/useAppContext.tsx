import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextProps {
  dolarValue: string;
  taxValue: string;
  paymentMethod: "cash" | "card";
  updateDolarValue: (newValue: string) => void;
  updateTaxValue: (newValue: string) => void;
  handlePaymentMethod: (paymentMethod: "cash" | "card") => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [dolarValue, setDolarValue] = useState<string>("");
  const [taxValue, setTaxValue] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");

  const updateDolarValue = (newDolarValue: string) =>
    setDolarValue(newDolarValue);

  const updateTaxValue = (newTaxValue: string) => setTaxValue(newTaxValue);

  const handlePaymentMethod = (paymentMethod: "cash" | "card") => {
    setPaymentMethod(paymentMethod);
  };

  return (
    <AppContext.Provider
      value={{
        dolarValue,
        taxValue,
        paymentMethod,
        updateDolarValue,
        updateTaxValue,
        handlePaymentMethod,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
