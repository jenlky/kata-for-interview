const { isPalindromic } = require("../isPalindromic");

describe.only("isPalindromic", () => {
  it("should return true if word is a palindrome", () => {
    expect(isPalindromic("abba")).toBe(true);
  });

  it("should return true even if it has capitalised letter", () => {
    expect(isPalindromic("abbA")).toBe(true);
  });

  it("should return false if word is not a palindrome", () => {
    expect(isPalindromic("abcd")).toBe(false);
  });
});
