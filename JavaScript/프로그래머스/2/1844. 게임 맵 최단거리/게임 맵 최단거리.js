function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dirs = [
    [1, 0],  
    [-1, 0], 
    [0, 1],  
    [0, -1],
  ];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const q = [[0, 0, 1]]; 
  let head = 0;

  visited[0][0] = true; //처음 출발칸

  while (head < q.length) {
    const [x, y, dist] = q[head++];

    if (x === n - 1 && y === m - 1) return dist;

    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx < n &&
        ny >= 0 && ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        q.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
