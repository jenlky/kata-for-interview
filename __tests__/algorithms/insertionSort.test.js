const { insertionSort } = require("../insertionSort");

describe.only("insertionSort", () => {
  const arr = [6, 5, 3, 1, 8, 7, 2, 4];

  it("should sort ", () => {
    expect(insertionSort(arr)).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
