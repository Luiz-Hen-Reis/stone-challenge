"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useAppContext } from "@/useAppContext";
import { formatDolarValueToNumber } from "@/utils/formatDolarValueToNumber";
import { ReactNode, useState } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  variant?: boolean;
}

const StyledButton = styled.button<{ disabled?: boolean; variant?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  width: ${(props) => (props.variant ? "12rem" : "14.9rem")};
  height: 5.6rem;
  padding: 1.6rem;
  border-radius: 0.8rem;
  border: 1px;
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled ? "var(--medium-gray)" : "var(--brand-color-2)"};
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;

  background-color: ${(props) => (props.variant ? "#FFFFFF" : "")};
  color: ${(props) => (props.variant ? "var(--dark-gray)" : "")};
  border: 1px solid ${(props) => (props.variant ? "var(--medium-gray)" : "")};
  box-shadow: ${(props) =>
    props.variant ? "var(--light-gray) 0px 10px 5px" : ""};
`;

export default function Button({ children, disabled, variant }: Props) {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const {
    result,
    handleResult,
    dolarValue,
    taxValue,
    paymentMethod,
    iofValue,
    updateDolarValue,
    updateTaxValue,
  } = useAppContext();
  const { data } = useCurrency();

  const formatPercentageToDecimalValue = (taxValue: string) => {
    const taxValueToNumber = Number(taxValue.replace(",", "."));
    const taxValueInDecimal = taxValueToNumber / 100;

    return taxValueInDecimal;
  };

  const dolar = formatDolarValueToNumber(dolarValue);
  const tax = formatPercentageToDecimalValue(taxValue);
  const dolarDayValue = Number(data?.USDBRL.ask);

  const handleIsCalculated = () => {
    if (result === 0) {
      if (paymentMethod === "card") {
        const value = (dolar + tax + iofValue) * dolarDayValue;

        value.toFixed(2);
        handleResult(value);
      } else {
        const value = (dolar + tax) * (dolarDayValue + iofValue);

        value.toFixed(2);
        handleResult(value);
      }

      setIsCalculated(true);
    } else {
      handleResult(0);
      updateDolarValue("");
      updateTaxValue("");
      setIsCalculated(false);
    }
  };

  return (
    <>
      {!variant && (
        <StyledButton disabled={disabled} onClick={handleIsCalculated}>
          {children}
        </StyledButton>
      )}
      {variant && (
        <StyledButton variant onClick={handleIsCalculated}>
          {children}
        </StyledButton>
      )}
    </>
  );
}
