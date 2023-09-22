"use client";

import StyledComponentsRegistry from "@/app/registry";
import { ReactNode } from "react";
import styled from "styled-components";
import DolarsImage from "./dolars-image";
import Header from "./header";

interface Props {
  children: ReactNode;
}

const Container = styled.div`
  padding: 7.1rem 6.6rem 0;
`;

export default function PageContainer({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <Container>
        <Header />
        {children}
      </Container>
      <DolarsImage />
    </StyledComponentsRegistry>
  );
}
