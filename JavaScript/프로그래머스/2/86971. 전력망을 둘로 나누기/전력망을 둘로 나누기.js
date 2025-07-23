function solution(n, wires) {
  let minDiff = n;

  const buildGraph = (skipIdx) => {
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b], idx) => {
      if (idx === skipIdx) return;
      graph[a].push(b);
      graph[b].push(a);
    });
    return graph;
  };

  const bfs = (start, graph, visited) => {
    let queue = [start];
    visited[start] = true;
    let count = 1;

    while (queue.length) {
      const node = queue.shift();
      for (const next of graph[node]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }

    return count;
  };

  for (let i = 0; i < wires.length; i++) {
    const graph = buildGraph(i);
    const visited = Array(n + 1).fill(false);
    const partSize = bfs(1, graph, visited);
    const otherPartSize = n - partSize;
    const diff = Math.abs(partSize - otherPartSize);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
