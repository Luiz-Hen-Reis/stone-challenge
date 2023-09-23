"use client";

import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  labelName: string;
  inputId: "dolar-value" | "state-tax";
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: var(--dark-gray);
  }

  input {
    width: 16.8rem;
    padding: 1.6rem;
    border-radius: 4px;
    border: 1px solid var(--medium-gray);
    box-shadow: var(--light-gray) 0px 10px 5px;
  }
`;

export default function InputField({
  labelName,
  inputId,
  placeholder,
  value,
  handleChange,
}: Props) {
  return (
    <Container>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        type="number"
        placeholder={placeholder}
        id={inputId}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
