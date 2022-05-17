const { myRemove } = require('./myRemove');

describe('Test function myRemove()', () => {
  it('Should return an Array without the element passed to be removed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Should not return an Array with the element passed to be removed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Should return an Array equal to the original if the element passed doesn't exists in the original array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});