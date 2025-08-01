function solution(routes) {

    routes.sort((a, b) => a[1] - b[1]);
    
    let answer = 0;
    let camera = -30001; // 초기값: 차량 경로보다 작은 값

    for (const [start, end] of routes) {
        if (camera < start) {
            // 현재 카메라가 차량 범위 밖이면 새 카메라 설치
            answer++;
            camera = end;
        }
    }

    return answer;
}
