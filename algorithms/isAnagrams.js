module.exports.isAnagrams = (word, anotherWord) => {
  // count the occurance of each character
  // if each character appear the same amount of time, it is an anagram
  const wordCount = {};
  for (let letter of word) {
    if (wordCount[letter]) {
      wordCount[letter] = 1;
    }
    wordCount[letter]++;
  }

  const anotherWordCount = {};
  for (let letter of anotherWord) {
    if (anotherWordCount[letter]) {
      anotherWordCount[letter] = 1;
    }
    anotherWordCount[letter]++;
  }

  if (wordCount.length === anotherWordCount.length) {
  }

  // object compare
  if (JSON.stringify(wordCount) === JSON.stringify(anotherWordCount)) {
    return true;
  }
  return false;
};
