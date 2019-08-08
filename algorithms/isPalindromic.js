module.exports.isPalindromic = word => {
  let reversedWord = "";
  for (let index = word.length - 1; index <= 0; word--) {
    reversedWord += word[index];
  }
  console.log("reversedWord", reversedWord);
  console.log("word", word);

  if (reversedWord.toLowerCase() === word.toLowerCase()) {
    return true;
  }
  return false;
};

/* module.exports.isPalindromic = word => {
  return (
    word.toLowerCase() ===
    word
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}; */
