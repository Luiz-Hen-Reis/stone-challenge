import { addZero } from "@/utils/addZero";

describe("addZero", () => {
  it("should add a zero to a number that is higher or equal to 10", () => {
    const numberTen = addZero(10);
    const numberTwelve = addZero(12);

    expect(numberTen).toBe("10");
    expect(numberTwelve).toBe("12");
  });

  it("should add a zero to a number that is lesser or equal to 9", () => {
    const numberNine = addZero(9);
    const numberSeven = addZero(7);

    expect(numberNine).toBe("09");
    expect(numberSeven).toBe("07");
  });
});
