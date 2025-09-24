function solution(expression) {
  const ops = [...new Set(expression.match(/[\-\*\+]/g))];

  const getPermutations = (arr) => {
    if (arr.length === 1) return [arr];
    const result = [];
    arr.forEach((fixed, idx) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx+1)];
      const perms = getPermutations(rest);
      perms.forEach((p) => result.push([fixed, ...p]));
    });
    return result;
  };
  const orders = getPermutations(ops);

  const tokens = expression.match(/\d+|[\-\*\+]/g);

  let max = 0;
  for (let order of orders) {
    let temp = [...tokens];
    for (let op of order) {
      let stack = [];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i] === op) {
          const prev = Number(stack.pop());
          const next = Number(temp[++i]);
          if (op === "*") stack.push(prev * next);
          if (op === "+") stack.push(prev + next);
          if (op === "-") stack.push(prev - next);
        } else {
          stack.push(temp[i]);
        }
      }
      temp = stack;
    }
    max = Math.max(max, Math.abs(temp[0]));
  }

  return max;
}

