function solution(players, callings) {
  const pos = new Map(players.map((name, idx) => [name, idx]));

  for (const name of callings) {
    const i = pos.get(name);       
    if (i === 0) continue;      

    const front = players[i - 1]; 

    [players[i - 1], players[i]] = [players[i], players[i - 1]];

    pos.set(name, i - 1);
    pos.set(front, i);
  }
  return players;
}
