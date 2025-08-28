function solution(k, score) {
    const arr = []
    const answer = []
    for (s of score) {
        arr.push(s)
        const sortedArr = arr.sort((a,b)=> b-a).slice(0,k)
        answer.push(sortedArr[sortedArr.length-1])
    }
    return answer;
}