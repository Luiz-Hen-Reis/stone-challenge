import { formatToPercentage } from "@/utils/formatToPercentage";

describe("formatToPercentage", () => {
  it("should format a number as a percentage string", () => {
    const value = "10.5";
    const result = formatToPercentage(value);
    expect(result).toBe("10.5 %");
  });

  it("handles numbers with different decimal separators", () => {
    const value = "5,75";
    const result = formatToPercentage(value);
    expect(result).toBe("5,75 %");
  });
});
