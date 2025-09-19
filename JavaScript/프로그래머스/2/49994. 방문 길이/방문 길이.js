function solution(dirs) {
    let count = 0;
    let current = [0, 0]; // 현재 위치
    const visited = new Set(); // 방문한 길 저장

    const isOut = ([x, y]) => Math.abs(x) > 5 || Math.abs(y) > 5;

    const makeEdge = (a, b) => {
        // 두 점을 직렬화해서 항상 정렬된 순서로 저장
        const s1 = `${a[0]},${a[1]}`;
        const s2 = `${b[0]},${b[1]}`;
        return s1 < s2 ? `${s1}-${s2}` : `${s2}-${s1}`;
    };

    for (const dir of dirs) {
        let next = [...current];

        switch (dir) {
            case "U": next[1]++; break;
            case "D": next[1]--; break;
            case "R": next[0]++; break;
            case "L": next[0]--; break;
        }

        if (isOut(next)) continue; // 범위 밖이면 무시

        const edge = makeEdge(current, next);
        if (!visited.has(edge)) {
            visited.add(edge);
            count++;
        }

        current = next;
    }

    return count;
}
