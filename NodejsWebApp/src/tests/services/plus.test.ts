import PlusService from "../../services/Plus.service";

describe("PlusService", () => {
  it("should return the sum of two numbers", async () => {
    const plus = {
      firstValue: 5,
      secondValue: 10,
    };

    const expectedResult = 15;
    const result = await PlusService.plusNumbers(plus);

    expect(result).toBe(expectedResult);
  });
});
