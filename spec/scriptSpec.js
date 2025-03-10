const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator Tests", () => {
  it("Calculate Simple Interest", () => {
    var actual = calculateSimpleInterest(1000, 5, 1);
    expect(actual).toBe(50);
  });

  it("Calculate Total Amount", () => {
    var actual = calculateTotalPayableAmount(1000, 50);
    expect(actual).toBe(1050);
  });
});
