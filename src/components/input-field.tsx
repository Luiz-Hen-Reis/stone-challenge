"use client";

import { useState, FormEvent, useCallback, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  labelName: string;
  inputId: "dolar-value" | "state-tax";
  placeholder: string;
  inputValue: string;
  updateInputValue: (newValue: string) => void;
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

  div {
    position: relative;

    input {
      width: 16.8rem;
      padding: 1.6rem;
      border-radius: 4px;
      border: 1px solid var(--medium-gray);
      box-shadow: var(--light-gray) 0px 10px 5px;
      padding-left: 2.5rem;
    }
  }
`;

const DolarSign = styled.span`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
  z-index: 99;
`;

export default function InputField({
  prefix,
  labelName,
  inputId,
  placeholder,
  inputValue,
  updateInputValue,
}: InputProps) {
  const currencyInputMask = (e: FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");

    e.currentTarget.value = value;

    updateInputValue(e.currentTarget.value);

    return inputValue;
  };

  const percentageInputMask = (e: FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;

    value = value.replace(/[^\d,]/g, "");
    value = value.replace(/,/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");

    value = value.replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
    e.currentTarget.value = value;

    updateInputValue(e.currentTarget.value);

    return inputValue;
  };

  const handleKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
    inputId === "dolar-value" && currencyInputMask(e);
    inputId === "state-tax" && percentageInputMask(e);
  }, []);

  return (
    <Container>
      <label htmlFor={inputId}>{labelName}</label>
      <div>
        {prefix && <DolarSign>{prefix}</DolarSign>}
        <input
          placeholder={placeholder}
          id={inputId}
          onKeyUp={handleKeyUp}
          maxLength={inputId === "state-tax" ? 6 : 100}
        />
      </div>
    </Container>
  );
}
