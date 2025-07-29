function solution(number, k) {
  const stack = [];
  let removed = 0;

  for (let digit of number) {
    while (stack.length && stack[stack.length - 1] < digit && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(digit);
  }

  return stack.slice(0, number.length - k).join('');
}
