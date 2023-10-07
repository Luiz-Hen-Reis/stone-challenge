"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useAppContext } from "@/useAppContext";
import { formatToPercentage } from "@/utils/formatToPercentage";
import { formatValueToReal } from "@/utils/formatValueToReal";
import styled from "styled-components";

interface Props {
  value: number;
}

const Container = styled.div`
  font-family: inherit;
  margin-top: 3.5rem;

  p {
    font-size: 2rem;
    font-weight: 500;
    color: var(--medium-gray-2);
    margin-bottom: 1.2rem;
  }
  strong {
    font-size: 6.4rem;
    font-weight: 500;
    color: var(--brand-color-2);
  }

  div {
    margin-top: 2.5rem;

    p {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--medium-gray);
      margin-bottom: 0.8rem;
    }
  }
`;

export default function Result({ value }: Props) {
  const { paymentMethod, taxValue } = useAppContext();
  const { data } = useCurrency();

  const result = formatValueToReal(value);
  const dolarInRealValue = formatValueToReal(Number(data?.USDBRL.ask));
  const taxPercentage = formatToPercentage(taxValue);

  return (
    <Container>
      <p>O resultado do cálculo é</p>
      <strong>{result}</strong>
      <div>
        <p>
          {`Compra no ${
            paymentMethod === "card" ? "cartão" : "dinheiro"
          } e taxa de ${taxPercentage}`}
        </p>
        <p>Cotação do dólar: $1,00 = {dolarInRealValue}</p>
      </div>
    </Container>
  );
}
