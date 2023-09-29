"use client";

import styled from "styled-components";
import InputField from "./input-field";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: inherit;
`;

export default function ConversorContainer() {
  const [dolarValue, setDolarValue] = useState<string>("");
  const [taxValue, setTaxValue] = useState<string>("");

  const updateDolarValue = (newDolarValue: string) => {
    setDolarValue(newDolarValue);
  };

  const updateTaxValue = (newTaxValue: string) => {
    setTaxValue(newTaxValue);
  };

  return (
    <Form>
      <InputField
        inputId="dolar-value"
        labelName="Dólar"
        placeholder="$ 0,00"
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
    </Form>
  );
}
