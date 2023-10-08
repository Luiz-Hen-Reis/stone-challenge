"use client";

import Button from "@/components/button";
import ConversorInputContainer from "@/components/conversor-input-container";
import ArrowLeft from "@/components/icons/arrow-left";
import EnchangeIcon from "@/components/icons/exchange-icon";
import PaymentMethod from "@/components/payment-method";
import Result from "@/components/result";
import { useAppContext } from "@/useAppContext";

export default function Home() {
  const { taxValue, dolarValue, result } = useAppContext();

  return (
    <>
      <main>
        {result === 0 && (
          <>
            <ConversorInputContainer />
            <PaymentMethod />
            <Button
              disabled={taxValue === "" || dolarValue === "" ? true : false}
            >
              <EnchangeIcon /> Converter
            </Button>
          </>
        )}
        {result !== 0 && (
          <>
            <Button variant="true">
              <ArrowLeft />
              Voltar
            </Button>
            <Result value={result} />
          </>
        )}
      </main>
    </>
  );
}
