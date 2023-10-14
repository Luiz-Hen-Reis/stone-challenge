import { addZero } from "@/utils/addZero";
import { getCurrentTime } from "@/utils/getCurrentTime";

describe("getCurrentTime", () => {
  it("Should return the current time in the correct format", () => {
    const mockDate = new Date();

    const result = getCurrentTime();

    const minutes = mockDate.getMinutes();
    const hours = mockDate.getHours();
    const expectedTime = `${addZero(hours)}:${addZero(minutes)} UTC`;

    expect(result).toBe(expectedTime);
  });
});
