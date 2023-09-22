"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { StoneLogo } from "./icons/stone-logo";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { getCurrentTime } from "@/utils/getCurrentTime";

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 3rem;
  font-family: inherit;

  span {
    font-weight: 500;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--medium-gray);
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const currentDate = getCurrentDate();

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <Container>
      <h1>
        <StoneLogo />
      </h1>
      <InfoBox>
        <span>
          {currentDate} | {currentTime}
        </span>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </InfoBox>
    </Container>
  );
}
