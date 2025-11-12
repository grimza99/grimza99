function solution(s) {
    const splittedArr = s.split(' ')
    let answer = []
    for (el of splittedArr){
        const first = [...el].splice(0,1).toString().toUpperCase()
        const rest = [...el].splice(1,el.length).join('').toLowerCase()
        answer.push(first+rest)
    }
    return answer.join(' ');
}