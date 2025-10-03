function solution(n, k) {
  let people = Array.from({ length: n }, (_, i) => i + 1);
  let result = [];

  // 팩토리얼 함수
  function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
  }

  k--; // 인덱스 기반으로 맞추기 (0-based)

  for (let i = n; i > 0; i--) {
    let fact = factorial(i - 1);
    let index = Math.floor(k / fact); // 현재 자리수 결정
    result.push(people[index]);       // 해당 번호 뽑기
    people.splice(index, 1);          // 사용한 사람 제거
    k %= fact;                        // 나머지로 다음 단계 진행
  }

  return result;
}
