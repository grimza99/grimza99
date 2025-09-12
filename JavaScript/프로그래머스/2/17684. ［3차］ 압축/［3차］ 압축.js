function solution(msg) {
  const dic = new Map();
  for (let i = 0; i < 26; i++) {
    dic.set(String.fromCharCode(65 + i), i + 1);
  }

  const answer = [];
  let w = "";
  let index = 27;

  for (let i = 0; i < msg.length; i++) {
    w += msg[i]; 

    if (!dic.has(w)) {
        dic.set(w, index++);
      answer.push(dic.get(w.slice(0, -1))); 
      w = msg[i];
    }
  }

  if (w) answer.push(dic.get(w));

  return answer;
}
