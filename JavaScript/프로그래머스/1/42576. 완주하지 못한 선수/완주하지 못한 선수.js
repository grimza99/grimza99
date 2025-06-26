function solution(participant, completion) {
  const map = {};

  for (const name of participant) {
    map[name] = (map[name] || 0) + 1;
  }

  for (const name of completion) {
    map[name] -= 1;
  }

  for (const name in map) {
    if (map[name] > 0) return name;
  }
}