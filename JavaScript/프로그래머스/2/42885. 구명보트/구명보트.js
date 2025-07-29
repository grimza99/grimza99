function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0; //가장 가벼운 사람
  let right = people.length - 1; //가장 무거운 사람
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) { //가장 가벼운 사람 + 가장 무거운 사람 조합으로 보트를 탈수 있는가?
      left++;
      right--;
    } else {
      right--;
    }
    count++; // 보트 하나 사용
  }

  return count;
}
