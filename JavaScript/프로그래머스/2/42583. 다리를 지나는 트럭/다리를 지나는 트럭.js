function solution(bridge_length, weight, truck_weights) {
    let arr = new Array(bridge_length).fill(0); // 다리 초기 상태
    let seconds = 0;
    let totalWeight = 0;

    while (truck_weights.length > 0) {
        seconds++;

        // 1. 다리에서 트럭 한 대 내리기
        const out = arr.shift();
        totalWeight -= out;

        // 2. 새 트럭 올릴 수 있으면 올리기
        if (totalWeight + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            arr.push(truck);
            totalWeight += truck;
        } else {
            // 못 올리면 빈 공간
            arr.push(0);
        }
    }

    // 3. 마지막 트럭이 다 건너는 시간까지 추가
    return seconds + bridge_length;
}
