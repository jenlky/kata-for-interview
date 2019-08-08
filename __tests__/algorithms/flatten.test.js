const flatten = require("../../algorithms/flatten");

const twoDimensionalArray = [1, 3, [2, 7], 8];

describe("flatten", () => {
  it("should flatten a two-dimensional array", () => {
    expect(flatten(twoDimensionalArray)).toEqual([1, 3, 2, 7, 8]);
  });
});
