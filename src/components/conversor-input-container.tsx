"use client";

import styled from "styled-components";
import InputField from "./input-field";
import { useState } from "react";
import { useAppContext } from "@/useAppContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: inherit;
`;

export default function ConversorInputContainer() {
  const { dolarValue, updateDolarValue, taxValue, updateTaxValue } =
    useAppContext();

  return (
    <Container>
      <InputField
        inputId="dolar-value"
        labelName="Dólar"
        placeholder="0,00"
        prefix="$"
        inputValue={dolarValue}
        updateInputValue={updateDolarValue}
      />
      <InputField
        inputId="state-tax"
        labelName="Taxa do Estado"
        placeholder="0 %"
        inputValue={taxValue}
        updateInputValue={updateTaxValue}
      />
    </Container>
  );
}
