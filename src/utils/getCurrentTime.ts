import { addZero } from "./addZero";

export function getCurrentTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  return `${addZero(hours)}:${addZero(minutes)} UTC`;
}
