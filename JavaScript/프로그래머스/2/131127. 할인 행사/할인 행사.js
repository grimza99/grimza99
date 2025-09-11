function solution(want, number, discount) {
  const wantMap = new Map();
    
  want.forEach((product, idx) => {
    wantMap.set(product, number[idx]);
  });

  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const window = discount.slice(i, i + 10);
    const windowMap = new Map();

    for (const item of window) {
      windowMap.set(item, (windowMap.get(item) || 0) + 1);
    }

    const isValid = [...wantMap.entries()].every(
      ([product, cnt]) => windowMap.get(product) === cnt
    );

    if (isValid) {
      answer++;
    }
  }

  return answer;
}
