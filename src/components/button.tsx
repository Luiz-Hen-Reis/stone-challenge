"use client";

import { useAppContext } from "@/useAppContext";
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
  const { result, handleResult } = useAppContext();

  const handleIsCalculated = () => {
    if (result === 0) {
      setIsCalculated(true);
    } else {
      handleResult(0);
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
