"use client";

import { useAppContext } from "@/useAppContext";
import styled from "styled-components";

interface Props {
  paymentMethod: "cash" | "card";
  checked: boolean;
}

const Container = styled.div<{ checked: boolean }>`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 450;
    line-height: 2.4rem;

    input {
      opacity: 0;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;

      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      border: ${(props) =>
        props.checked
          ? "2px solid var(--brand-color)"
          : "2px solid var(--medium-gray)"};

      span {
        opacity: ${(props) => (props.checked ? 1 : 0)};
        position: absolute;
        top: 3.5px;
        right: 3.4px;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background-color: var(--brand-color);
      }
    }
  }
`;

export default function CheckboxField({ paymentMethod, checked }: Props) {
  const { handlePaymentMethod } = useAppContext();

  return (
    <Container checked={checked}>
      <label htmlFor={paymentMethod}>
        <div>
          <span></span>
          <input
            type="checkbox"
            id={paymentMethod}
            onClick={() => handlePaymentMethod(paymentMethod)}
          />
        </div>
        {paymentMethod === "card" ? "Cartão" : "Dinheiro"}
      </label>
    </Container>
  );
}
