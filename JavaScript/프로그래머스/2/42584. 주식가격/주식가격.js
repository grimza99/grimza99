function solution(prices) {
  const answer = [];
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = i + 1; j < n; j++) {
      count++;

      if (prices[j] < prices[i]) break;
    }

    answer.push(count);
  }

  return answer;
}
