function solution(word) {
  const chars = ['A', 'E', 'I', 'O', 'U'];
  const result = [];

  const dfs = (current) => {
    if (current.length > 5) return;
    if (current.length > 0) result.push(current);

    for (const ch of chars) {
      dfs(current + ch);
    }
  };

  dfs(""); 

  return result.indexOf(word) + 1;
}
