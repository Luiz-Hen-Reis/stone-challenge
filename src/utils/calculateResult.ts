interface CalculateResultProps {
  paymentMethod: "card" | "cash";
  dolar: number;
  tax: number;
  dolarDayValue: number;
  iofValue: number;
  handleResult: (newResult: number) => void;
}

export default function calculateResult({
  paymentMethod,
  dolar,
  tax,
  iofValue,
  dolarDayValue,
  handleResult,
}: CalculateResultProps) {
  if (paymentMethod === "card") {
    const value = (dolar + tax + iofValue) * dolarDayValue;

    value.toFixed(2);
    handleResult(value);
  } else {
    const value = (dolar + tax) * (dolarDayValue + iofValue);

    value.toFixed(2);
    handleResult(value);
  }
}
