class Heap {
  constructor(cmp) {
    this.a = [];
    this.cmp = cmp; // (x,y) => x가 y보다 먼저냐?
  }
  size() { return this.a.length; }
  peek() { return this.a[0]; }
  push(x) {
    const a = this.a;
    a.push(x);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.cmp(a[i], a[p])) break;
      [a[i], a[p]] = [a[p], a[i]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    if (a.length === 0) return undefined;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1, r = l + 1, m = i;
        if (l < a.length && this.cmp(a[l], a[m])) m = l;
        if (r < a.length && this.cmp(a[r], a[m])) m = r;
        if (m === i) break;
        [a[i], a[m]] = [a[m], a[i]];
        i = m;
      }
    }
    return top;
  }
}

function solution(operations) {
  const minH = new Heap((x, y) => x < y);
  const maxH = new Heap((x, y) => x > y);
  const count = new Map(); // value -> remaining count
  let size = 0;            // 현재 큐의 유효 원소 개수

  const clean = (heap) => {
    // top이 실제로는 삭제된(=count 0) 값이면 버린다
    while (heap.size()) {
      const v = heap.peek();
      const c = count.get(v) || 0;
      if (c > 0) break;
      heap.pop(); // stale value 제거
    }
  };

  for (const op of operations) {
    if (op[0] === 'I') {
      const num = parseInt(op.slice(2), 10);
      minH.push(num);
      maxH.push(num);
      count.set(num, (count.get(num) || 0) + 1);
      size++;
    } else if (op[0] === 'D') {
      if (size === 0) continue; // 빈 큐 삭제 무시
      if (op[2] === '1') {
        // delete max
        clean(maxH);
        const v = maxH.pop();
        const c = count.get(v) || 0;
        if (c > 1) count.set(v, c - 1);
        else count.delete(v);
        size--;
      } else {
        // delete min
        clean(minH);
        const v = minH.pop();
        const c = count.get(v) || 0;
        if (c > 1) count.set(v, c - 1);
        else count.delete(v);
        size--;
      }
    }
  }

  if (size === 0) return [0, 0];

  clean(minH);
  clean(maxH);

  return [maxH.peek(), minH.peek()];
}
