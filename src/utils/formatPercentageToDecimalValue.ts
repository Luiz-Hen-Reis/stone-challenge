export default function formatPercentageToDecimalValue(taxValue: string) {
  const taxValueToNumber = Number(taxValue.replace(",", "."));
  const taxValueInDecimal = taxValueToNumber / 100;

  return taxValueInDecimal;
}
