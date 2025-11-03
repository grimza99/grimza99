
function solution(n) {
  const arr = ['4', '1', '2']; 
  let result = '';

  while (n > 0) {
    const remainder = n % 3;
    n = Math.floor((n - 1) / 3); 
    result = arr[remainder] + result; 
  }

  return result;
}
