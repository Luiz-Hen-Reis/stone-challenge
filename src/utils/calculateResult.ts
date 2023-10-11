interface CalculateResultProps {
  paymentMethod: "card" | "cash";
  dolar: number;
  tax: number;
  dolarDayValue: number;
  iofTaxValue: number;
  handleResult: (newResult: number) => void;
}

export default function calculateResult({
  paymentMethod,
  dolar,
  tax,
  iofTaxValue,
  dolarDayValue,
  handleResult,
}: CalculateResultProps) {
  if (paymentMethod === "card") {
    const value = (dolar + tax * dolar + iofTaxValue * dolar) * dolarDayValue;

    value.toFixed(2);
    handleResult(value);
  } else {
    const value = (dolar + tax * dolar) * dolarDayValue + iofTaxValue * dolar;

    value.toFixed(2);
    handleResult(value);
  }
}
