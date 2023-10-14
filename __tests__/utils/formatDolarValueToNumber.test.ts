import formatDolarValueToNumber from "@/utils/formatDolarValueToNumber";

describe("formatDolarValueToNumber", () => {
  it("should convert a comma-separated dolar value to a number", () => {
    const dolarValue = "10,000,50";
    const result = formatDolarValueToNumber(dolarValue);
    expect(result).toBe(10000.5);
  });

  it("handles dolar values with no thousands separator", () => {
    const dolarValue = "1,000,75";
    const result = formatDolarValueToNumber(dolarValue);
    expect(result).toBe(1000.75);
  });

  it("handles dolar values with no decimal part", () => {
    const dolarValue = "500";
    const result = formatDolarValueToNumber(dolarValue);
    expect(result).toBe(500);
  });

  it("handles dolar values with different decimal separators", () => {
    const dolarValue = "1,234,56";
    const result = formatDolarValueToNumber(dolarValue);
    expect(result).toBe(1234.56);
  });

  it("returns NaN for invalid dolar values", () => {
    const dolarValue = "invalid";
    const result = formatDolarValueToNumber(dolarValue);
    expect(isNaN(result)).toBe(true);
  });
});
