"use client";

import "./globals.css";
import { Roboto } from "next/font/google";
import PageContainer from "@/components/page-container";
import { AppContextProvider } from "@/useAppContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppContextProvider>
          <PageContainer>{children}</PageContainer>
        </AppContextProvider>
      </body>
    </html>
  );
}
