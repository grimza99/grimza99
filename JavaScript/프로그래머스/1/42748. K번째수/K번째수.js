function solution(array, commands) {
    var answer = [];

    for (command of commands) {
         const slicedArr = array.slice(command[0]-1,command[1])
         const sortedArr = slicedArr.sort((a,b)=> a-b)
        answer.push(sortedArr[command[2]-1])
    }
    return answer;
}