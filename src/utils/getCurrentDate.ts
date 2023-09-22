import { addZero } from "./addZero";

export function getCurrentDate() {
  const date = new Date();

  const dayOfTheMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${addZero(dayOfTheMonth)} de ${numberToMonth(month)} de ${year}`;
}

function numberToMonth(monthInNumber: number): string {
  const monthsNames: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (monthInNumber >= 1 && monthInNumber <= 12) {
    return monthsNames[monthInNumber - 1];
  } else {
    return "Mês inválido";
  }
}
