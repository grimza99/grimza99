function solution(numbers) {
  const set = new Set();
    
  function getPermutations(arr, prefix = '') {
    if (prefix.length > 0) {
      set.add(Number(prefix));
    }

    for (let i = 0; i < arr.length; i++) {
      const next = [...arr];    
      const picked = next.splice(i, 1); 
      getPermutations(next, prefix + picked); 
    }
  }

  function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}  
    
  getPermutations([...numbers]);
  return [...set].filter(isPrime).length; 

}