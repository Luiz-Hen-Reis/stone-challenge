import { addZero } from "@/utils/addZero";
import { getCurrentDate, numberToMonth } from "@/utils/getCurrentDate";

describe("getCurrentDate", () => {
  it("should return the current date", () => {
    const mockDate = new Date();
    const date = getCurrentDate();

    const dayOfTheMonth = mockDate.getDate();
    const month = mockDate.getMonth() + 1;
    const year = mockDate.getFullYear();
    const expectedDate = `${addZero(dayOfTheMonth)} de ${numberToMonth(
      month
    )} de ${year}`;

    expect(date).toBe(expectedDate);
  });

  it("Should return the month name correctly for valid numbers", () => {
    expect(numberToMonth(1)).toBe("Janeiro");
    expect(numberToMonth(6)).toBe("Junho");
    expect(numberToMonth(12)).toBe("Dezembro");
  });

  it("Should return 'Mês inválido' for numbers outside the range 1-12", () => {
    expect(numberToMonth(0)).toBe("Mês inválido");
    expect(numberToMonth(13)).toBe("Mês inválido");
  });
});
