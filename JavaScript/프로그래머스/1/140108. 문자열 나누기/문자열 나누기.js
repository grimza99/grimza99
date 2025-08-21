function solution(s) {
    const arr = [...s]
    let current = arr[0]
    let count = 1;
    let stringCount = [1,0]
    
    for (let i = 1 ; i < arr.length ; i++) {
     if (stringCount[0] === stringCount[1]) {
         current = arr[i]
         count ++
         stringCount = [0,0]
     }  
        
     current === arr[i] ?  stringCount[0]++ : stringCount[1]++   
    }

    return count
}