const { myFizzBuzz } = require('./myFizzBuzz');

describe('Test the function myFizzBuzz()', () => {
  it("Should return 'fizzbuzz' if the number passed is divisible by 3 and 5", () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it("Should return 'fizz' if the number passed is divisible by 3 and not by 5", () => {
    expect(myFizzBuzz(6)).toMatch('fizz');
  });

  it("Should return 'buzz' if the number passed is divisible by 5 and not by 3", () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  it("Should return the number itself if it's not divisible by 3 and 5", () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it("Should return 'false' if the value passed it's not a number", () => {
    expect(myFizzBuzz('7')).toBe(false);
  });
});