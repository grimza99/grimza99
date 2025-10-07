const getPos = (board, str) => {
  return board
    .map((row, i) => {
      const idx = row.indexOf(str)
      if (idx !== -1) return [i, idx]
    })
    .find((el) => el)
}

const getD = (board, pos, dir) => {
  const [dx, dy] = dir
  let [x, y] = pos
  const n = board.length
  const m = board[0].length

  while (
    x + dx >= 0 &&
    x + dx < n &&
    y + dy >= 0 &&
    y + dy < m &&
    board[x + dx][y + dy] !== 'D'
  ) {
    x += dx
    y += dy
  }
  return [x, y]
}

function solution(board) {
  const start = getPos(board, 'R')
  const goal = getPos(board, 'G')

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const n = board.length
  const m = board[0].length
  const visited = Array.from({ length: n }, () => Array(m).fill(false))

  const queue = [[...start, 0]] // [x, y, 이동횟수]
  visited[start[0]][start[1]] = true

  while (queue.length) {
    const [x, y, cnt] = queue.shift()

    if (x === goal[0] && y === goal[1]) return cnt // 도착

    for (const dir of dirs) {
      const [nx, ny] = getD(board, [x, y], dir)
      if (!visited[nx][ny]) {
        visited[nx][ny] = true
        queue.push([nx, ny, cnt + 1])
      }
    }
  }

  return -1 // 도달 불가능
}