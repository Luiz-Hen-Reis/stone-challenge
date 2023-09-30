"use client";

import ConversorInputContainer from "@/components/conversor-input-container";
import EnchangeIcon from "@/components/icons/exchange-icon";
import PaymentMethod from "@/components/payment-method";
import { useAppContext } from "@/useAppContext";
import styled from "styled-components";

const Button = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  width: 14.9rem;
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
`;

export default function Home() {
  const { taxValue, dolarValue } = useAppContext();

  return (
    <>
      <main>
        <ConversorInputContainer />
        <PaymentMethod />
        <Button disabled={taxValue === "" || dolarValue === "" ? true : false}>
          <EnchangeIcon /> Converter
        </Button>
      </main>
    </>
  );
}
