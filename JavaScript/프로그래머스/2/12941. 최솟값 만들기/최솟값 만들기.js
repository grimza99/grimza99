function solution(A,B){
    const sortedA = A.sort((a,b)=> a-b)
    const sortedB = B.sort((a,b)=> b-a)
    let sum = 0
    for (let i = 0 ; i < sortedA.length; i++) {
        sum = sum + sortedA[i] * sortedB[i]
    }


    return sum;
}