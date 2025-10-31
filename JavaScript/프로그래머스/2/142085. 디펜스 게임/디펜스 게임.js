class MinHeap {
  constructor() { this.heap = []; }
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const l = i * 2 + 1, r = i * 2 + 2;
      let smallest = i;
      if (l < this.heap.length && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return root;
  }
  size() { return this.heap.length; }
  peek() { return this.heap[0]; }
}

function solution(n, k, enemy) {
  const heap = new MinHeap();
  let sum = 0;

  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i]);
    if (heap.size() > k) sum += heap.pop();
    if (sum > n) return i;
  }
  return enemy.length;
}
