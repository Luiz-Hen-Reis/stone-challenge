"use client";

import styled from "styled-components";
import CheckboxField from "./checkbox-field";
import { useAppContext } from "@/useAppContext";

const Container = styled.div`
  margin: 2.5rem 0;
  font-family: inherit;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1rem;
    margin-bottom: 1rem;
  }
`;

const InputCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: inherit;
`;

export default function PaymentMethod() {
  const { paymentMethod } = useAppContext();

  return (
    <Container>
      <h3>Tipo de Compra</h3>
      <InputCheckboxContainer>
        <CheckboxField
          paymentMethod="cash"
          checked={paymentMethod === "cash" ? true : false}
        />
        <CheckboxField
          paymentMethod="card"
          checked={paymentMethod === "card" ? true : false}
        />
      </InputCheckboxContainer>
    </Container>
  );
}
