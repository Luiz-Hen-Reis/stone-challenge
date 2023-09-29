"use client";

import ConversorInputContainer from "@/components/conversor-input-container";
import PaymentMethod from "@/components/payment-method";

export default function Home() {
  return (
    <>
      <main>
        <ConversorInputContainer />
        <PaymentMethod />
      </main>
    </>
  );
}
