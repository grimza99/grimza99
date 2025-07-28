function solution(name) {
  let answer = 0;

  // 1. 상하 이동 계산
  for (let i = 0; i < name.length; i++) {
    const ch = name[i].charCodeAt(0);
    answer += Math.min(ch - 65, 91 - ch); // 위 or 아래 중 빠른 쪽
  }

  // 2. 좌우 이동 최소화
  let move = name.length - 1; // 전부 오른쪽 이동
  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === 'A') next++;

    // i 지점까지 갔다가 → ← 돌아가는 경우 고려
    move = Math.min(move, i + name.length - next + Math.min(i, name.length - next));
  }

  return answer + move;
}
