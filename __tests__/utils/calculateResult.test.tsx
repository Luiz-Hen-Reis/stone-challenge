import calculateResult from "@/utils/calculateResult";

describe("calculateResult", () => {
  it("calculates the result correctly for card payment", () => {
    const handleResultMock = jest.fn();

    calculateResult({
      paymentMethod: "card",
      dolar: 11,
      tax: 2,
      iofTaxValue: 0.38,
      dolarDayValue: 5.5,
      handleResult: handleResultMock,
    });

    expect(handleResultMock).toHaveBeenCalledWith(204.49);
  });

  it("calculates the result correctly for cash payment", () => {
    const handleResultMock = jest.fn();

    calculateResult({
      paymentMethod: "cash",
      dolar: 10,
      tax: 2,
      iofTaxValue: 0.38,
      dolarDayValue: 5.5,
      handleResult: handleResultMock,
    });

    expect(handleResultMock).toHaveBeenCalledWith(168.8);
  });
});
