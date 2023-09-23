"use client";

import styled from "styled-components";
import InputField from "./input-field";
import { ChangeEvent, useState } from "react";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: inherit;
`;

export default function ConversorContainer() {
  const [dolarValue, setDolarValue] = useState<string>("");
  const [taxValue, setTaxValue] = useState<string>("");

  const handleChangeDolarValue = (e: ChangeEvent<HTMLInputElement>) => {
    setDolarValue(e.target.value);
  };

  const handleChangeTaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTaxValue(e.target.value);
  };

  return (
    <Form>
      <InputField
        inputId="dolar-value"
        labelName="Dólar"
        placeholder="$ 0,00"
        handleChange={handleChangeDolarValue}
        value={dolarValue}
      />
      <InputField
        inputId="state-tax"
        labelName="Taxa do Estado"
        placeholder="0 %"
        handleChange={handleChangeTaxValue}
        value={taxValue}
      />
    </Form>
  );
}
