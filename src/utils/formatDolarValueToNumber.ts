export default function formatDolarValueToNumber(dolarValue: string) {
  const dolarValueInNumberFormat = dolarValue.replace(",", ".");
  const arrayOfStrings = dolarValueInNumberFormat.split("");
  const justNumbersInStringFormat = arrayOfStrings.filter(
    (value) => value !== "."
  );
  const joinedStrings = justNumbersInStringFormat.join("");
  const joinedStringsInNumberFormat = joinedStrings.replace(",", ".");
  const dolarValueInNumber = Number(joinedStringsInNumberFormat);

  return dolarValueInNumber;
}
