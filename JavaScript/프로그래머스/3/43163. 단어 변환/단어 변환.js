function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = new Set();
  const queue = [[begin, 0]];

  while (queue.length) {
    const [current, depth] = queue.shift();

    if (current === target) return depth;

    for (const word of words) {
      if (!visited.has(word) && isOneLetterDiff(current, word)) {
        visited.add(word);
        queue.push([word, depth + 1]);
      }
    }
  }

  return 0;
}

function isOneLetterDiff(word1, word2) {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diffCount++;
    if (diffCount > 1) return false;
  }
  return diffCount === 1;
}
