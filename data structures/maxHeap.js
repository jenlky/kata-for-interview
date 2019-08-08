class MaxHeap {
  constructor() {
    this.priorityQueue = [];
  }

  getMax() {}

  extractMax() {}

  insert(item) {
    if (this.priorityQueue.length > 0) {
      const parentIndex = this.priorityQueue.length - 1 / 2;
      console.log(parentIndex);

      const parent = this.priorityQueue[parentIndex];

      console.log("item", item);
      console.log("parent", parent);

      if (item > parent) {
        this.priorityQueue[parentIndex] = item;
        this.priorityQueue.push(parent);
      }
    }

    this.priorityQueue.push(item);
  }

  delete() {}
}

module.exports = {
  MaxHeap
};
