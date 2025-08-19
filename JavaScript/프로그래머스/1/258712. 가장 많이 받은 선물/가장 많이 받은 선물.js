function solution(friends, gifts) {
  const n = friends.length;

  const idx = new Map(friends.map((name, i) => [name, i]));

  const sent = Array.from({ length: n }, () => Array(n).fill(0));
  const given = Array(n).fill(0);
  const received = Array(n).fill(0);

  for (const record of gifts) {
    const [a, b] = record.split(' ');
    const i = idx.get(a);
    const j = idx.get(b);
    sent[i][j]++;   // a가 b에게 보냄
    given[i]++;
    received[j]++;
  }

  const giftIndex = given.map((g, i) => g - received[i]);

  const nextRecv = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a2b = sent[i][j];
      const b2a = sent[j][i];

      if (a2b > b2a) {
        nextRecv[i]++;
      } else if (b2a > a2b) {
        nextRecv[j]++;
      } else {
        if (giftIndex[i] > giftIndex[j]) nextRecv[i]++;
        else if (giftIndex[j] > giftIndex[i]) nextRecv[j]++;
      }
    }
  }

  return Math.max(...nextRecv);
}
