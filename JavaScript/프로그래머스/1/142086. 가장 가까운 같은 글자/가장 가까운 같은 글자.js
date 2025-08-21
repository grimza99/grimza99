function solution(s) {
  let map = {};
  let answer = [];

  [...s].forEach((str, idx) => {
    if (map[str] !== undefined) {
      answer.push(idx - map[str]);
    } else {
      answer.push(-1);
    }
    map[str] = idx;
  });

  return answer;
}
