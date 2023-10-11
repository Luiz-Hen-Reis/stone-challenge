export function addZero(number: number): string {
  return number >= 10 ? number.toString() : `0${number}`;
}
