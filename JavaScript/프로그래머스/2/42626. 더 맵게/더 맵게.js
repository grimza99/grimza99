class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParent(i) { return Math.floor((i - 1) / 2); }
  getLeft(i) { return i * 2 + 1; }
  getRight(i) { return i * 2 + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 0 && this.heap[idx] < this.heap[this.getParent(idx)]) {
      this.swap(idx, this.getParent(idx));
      idx = this.getParent(idx);
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;
    while (true) {
      let left = this.getLeft(idx);
      let right = this.getRight(idx);
      let smallest = idx;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === idx) break;
      this.swap(idx, smallest);
      idx = smallest;
    }
    return root;
  }

  peek() { return this.heap[0]; }
  size() { return this.heap.length; }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  for (let s of scoville) heap.push(s);

  let count = 0;
  while (heap.peek() < K) {
    if (heap.size() < 2) return -1;
    const first = heap.pop();
    const second = heap.pop();
    heap.push(first + second * 2);
    count++;
  }
  return count;
}
