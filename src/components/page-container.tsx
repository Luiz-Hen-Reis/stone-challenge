"use client";

import StyledComponentsRegistry from "@/app/registry";
import { ReactNode } from "react";
import styled from "styled-components";
import DolarsImage from "./dolars-image";
import Header from "./header";
import { AppContextProvider } from "@/useAppContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Container = styled.div`
  padding: 7.1rem 6.6rem 0;
`;

export default function PageContainer({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <AppContextProvider>
          <Container>
            <Header />
            {children}
          </Container>
          <DolarsImage />
        </AppContextProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
