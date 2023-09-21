import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import PageContainer from "@/components/page-container";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Stone Currency",
  description: "Conversor de dólar para real",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
