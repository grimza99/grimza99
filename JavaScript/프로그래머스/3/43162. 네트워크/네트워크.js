function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  const dfs = (node) => {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);  // 새로운 네트워크 탐색 시작
      count++;
    }
  }

  return count;
}
