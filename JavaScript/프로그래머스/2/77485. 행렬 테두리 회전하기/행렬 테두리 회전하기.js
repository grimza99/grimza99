function solution(rows, columns, queries) {
    let matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );

    let answer = [];

    for (let [x1, y1, x2, y2] of queries) {
        x1--; y1--; x2--; y2--;

        let temp = matrix[x1][y1]; // 시작값 저장
        let min = temp;

        for (let i = x1; i < x2; i++) {
            matrix[i][y1] = matrix[i + 1][y1];
            min = Math.min(min, matrix[i][y1]);
        }

        for (let i = y1; i < y2; i++) {
            matrix[x2][i] = matrix[x2][i + 1];
            min = Math.min(min, matrix[x2][i]);
        }

        for (let i = x2; i > x1; i--) {
            matrix[i][y2] = matrix[i - 1][y2];
            min = Math.min(min, matrix[i][y2]);
        }

        for (let i = y2; i > y1 + 1; i--) {
            matrix[x1][i] = matrix[x1][i - 1];
            min = Math.min(min, matrix[x1][i]);
        }

        matrix[x1][y1 + 1] = temp;

        answer.push(min);
    }

    return answer;
}
