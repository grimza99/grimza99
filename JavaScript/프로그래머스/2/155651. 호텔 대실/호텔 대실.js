function solution(book_time) {
  function toMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m; //분 단위로 계산
  }

  const times = book_time.map(([start, end]) => [
    toMinutes(start),
    toMinutes(end) + 10, // 청소시간까지 포함
  ]);

  times.sort((a, b) => a[0] - b[0]);

  const rooms = []; // 각 방의 '끝나는 시간' 저장

  for (const [start, end] of times) {
    let assigned = false;

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) { // 기존 방에 들어갈 수 있을때
        rooms[i] = end;
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      rooms.push(end);
    }
  }

  return rooms.length;
}
