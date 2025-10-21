const findPerson = (place) => {
  const personArr = [];
  place.forEach((rows, rowIdx) => {
    [...rows].forEach((col, colIdx) => {
      if (col === "P") personArr.push([rowIdx, colIdx]);
    });
  });
  return personArr;
};

const pos = [
  [-1, 0], // up
  [1, 0],  // down
  [0, 1],  // right
  [0, -1], // left
];

function solution(places) {
  const result = [];

  const getAnswer = (place) => {
    const personPos = findPerson(place);

    for (const [py, px] of personPos) {
      for (const [dy, dx] of pos) {
        const ny = py + dy;
        const nx = px + dx;
        const newPos = place[ny]?.[nx];

        if (newPos === "P") {
          return 0;
        }

        if (newPos === "O") {
          for (const [dy2, dx2] of pos) {
            const ny2 = ny + dy2;
            const nx2 = nx + dx2;
            if (ny2 === py && nx2 === px) continue; // 자기 자신 제외

            const next = place[ny2]?.[nx2];
            if (next === "P") return 0;
          }
        }
      }
    }
    return 1; 
  };

  for (const place of places) {
    result.push(getAnswer(place));
  }

  return result;
}
