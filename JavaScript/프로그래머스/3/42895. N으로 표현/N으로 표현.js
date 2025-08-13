function solution(N, number) {
  if (N === number) return 1; 

  const dp = Array.from({ length: 9 }, () => new Set());

  for (let c = 1; c <= 8; c++) {
    const concat = Number(String(N).repeat(c));
    dp[c].add(concat);

    for (let i = 1; i < c; i++) {
      for (const a of dp[i]) {
        for (const b of dp[c - i]) {
          dp[c].add(a + b);
          dp[c].add(a - b);
          dp[c].add(a * b);
          if (b !== 0) dp[c].add(Math.trunc(a / b));
        }
      }
    }

    if (dp[c].has(number)) return c;
  }

  return -1;
}
