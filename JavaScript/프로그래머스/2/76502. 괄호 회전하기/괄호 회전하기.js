function solution(s) {
  if (s.length % 2) return 0; // 홀수면 무조건 불가능

  const arr = [...s];
  let count = 0;

  const isCorrectFunction = (target) => {
    const stack = [];
    const pairs = {
      ')': '(',
      ']': '[',
      '}': '{',
    };

    for (const t of target) {
      if (t === '(' || t === '[' || t === '{') {
        stack.push(t); // 여는 괄호면 push
      } else {
        // 닫는 괄호인데 스택이 비었거나, 매칭이 안 맞으면 false
        if (stack.length === 0 || stack.pop() !== pairs[t]) {
          return false;
        }
      }
    }

    return stack.length === 0; // 전부 맞게 닫혔으면 true
  };

  // 문자열 회전
  for (let i = 0; i < arr.length; i++) {
    const first = arr.shift();
    arr.push(first);

    if (isCorrectFunction(arr)) {
      count++;
    }
  }

  return count;
}
