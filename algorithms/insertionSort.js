module.exports.insertionSort = array => {
  for (let x = 1; x < array.length; x++) {
    const current = array[x];
    const nextIndex = x + 1;

    while (nextIndex > 0 && array[nextIndex] > current) {
      array[nextIndex] = array[x];
      nextIndex++;
    }
    array[nextIndex] = current;

    return array;
  }
};
