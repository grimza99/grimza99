function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    return a[col - 1] - b[col - 1];
  });

  let answer = 0;
  for (let i = row_begin - 1; i < row_end; i++) {
    const S_i = data[i].reduce((sum, val) => sum + (val % (i + 1)), 0);
    answer ^= S_i; 
  }

  return answer;
}
