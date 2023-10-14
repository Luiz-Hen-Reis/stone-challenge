import formatPercentageToDecimalValue from "@/utils/formatPercentageToDecimalValue";

describe("formatPercentageToDecimalValue", () => {
  it("should convert a percentage value to a decimal value", () => {
    const taxValue = "10,5";
    const result = formatPercentageToDecimalValue(taxValue);
    expect(result).toBe(0.105);
  });

  it("handles percentage values with comma as decimal separator", () => {
    const taxValue = "5,75";
    const result = formatPercentageToDecimalValue(taxValue);
    expect(result).toBe(0.0575);
  });

  it("handles percentage values without a percentage sign", () => {
    const taxValue = "3,25";
    const result = formatPercentageToDecimalValue(taxValue);
    expect(result).toBe(0.0325);
  });

  it("handles percentage values with zero", () => {
    const taxValue = "0";
    const result = formatPercentageToDecimalValue(taxValue);
    expect(result).toBe(0);
  });

  it("returns NaN for invalid percentage values", () => {
    const taxValue = "invalid";
    const result = formatPercentageToDecimalValue(taxValue);
    expect(isNaN(result)).toBe(true);
  });
});
