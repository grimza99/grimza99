function solution(k, dungeons) {
  let max = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(currentFatigue, count) {
    max = Math.max(max, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [min, cost] = dungeons[i];

      if (!visited[i] && currentFatigue >= min) {
        visited[i] = true;
        dfs(currentFatigue - cost, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return max;
}
