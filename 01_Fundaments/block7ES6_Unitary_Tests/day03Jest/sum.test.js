const { sum } = require("./sum.js");

describe("Test function sum", () => {
  it("Sholud return 9 if 4 and 5 is passed to sum()", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Sholud return 0 if 0 and 0 is passed to sum()", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Sholud return an error if a value is a string()", () => {
    expect(() => {sum(4, '5')}).toThrow(Error);
  });

  it("Sholud return an error message 'parameters must be numbers' if a value is a string()", () => {
    expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
  });
});
