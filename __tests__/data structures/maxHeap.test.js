const { MaxHeap } = require("../maxHeap");

let maxHeap;
beforeEach(() => {
  maxHeap = new MaxHeap();
});

describe("MaxHeap", () => {
  it("should construct a MaxHeap object", () => {
    expect(maxHeap.priorityQueue).toEqual([]);
  });

  describe("insert", () => {
    it("should insert an item", () => {
      maxHeap.insert(100);
      expect(maxHeap.priorityQueue[0]).toEqual(100);
    });

    it("should insert multiple items", () => {
      maxHeap.insert(100);
      maxHeap.insert(10);
      maxHeap.insert(20);
      expect(maxHeap.priorityQueue[0]).toEqual(100);
      expect(maxHeap.priorityQueue[1]).toEqual(10);
      expect(maxHeap.priorityQueue[2]).toEqual(20);
    });

    xit("should swap child with parent if child is greater than parent", () => {
      maxHeap.insert(10);
      maxHeap.insert(100);
      expect(maxHeap.priorityQueue[0]).toEqual(100);
      expect(maxHeap.priorityQueue[1]).toEqual(10);
    });
  });
});
