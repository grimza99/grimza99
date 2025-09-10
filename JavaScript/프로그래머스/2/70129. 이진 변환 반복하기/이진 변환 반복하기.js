function solution(s) {
    let count = 0 
    let removedZero = 0
    let string = s
    
    function removeZero  (string) {
        const arr = [...string].filter((s)=> s !== "0")
        removedZero += string.length - arr.length
        return arr.join("")
    }
    
    while (string !== "1") {
        count ++
        string = removeZero(string);
        string = string.length.toString(2)
    }
   
    return [count,removedZero]
}