function solution(maps) {
  const n = maps.length;        
  const m = maps[0].length;    
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const dfs = (x, y) => {
    visited[y][x] = true;
    let total = Number(maps[y][x]);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < m &&
        ny < n &&
        !visited[ny][nx] &&
        maps[ny][nx] !== 'X'
      ) {
        total += dfs(nx, ny);
      }
    }
    return total;
  };

  const results = [];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (!visited[y][x] && maps[y][x] !== 'X') {
        const days = dfs(x, y);
        results.push(days);
      }
    }
  }

  return results.length === 0 ? [-1] : results.sort((a, b) => a - b);
}
