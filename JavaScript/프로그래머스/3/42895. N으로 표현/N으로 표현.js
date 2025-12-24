function solution(N, number) {
    if (N === number) return 1
    
    let queue = Array.from({length:9},()=>new Set())
    
    for (let i = 1 ; i<= 8; i++){
        const concat = Number(String(N).repeat(i))
        queue[i].add(concat)
        
        for (let j=1 ; j<i ; j++){
            for (const a of queue[j]) {
                for (const b of queue[i-j]){
                    queue[i].add(a + b);
                    queue[i].add(a - b);
                    queue[i].add(a * b);
                    if (b !== 0) queue[i].add(Math.trunc(a / b));
                }
            }
        }
        if (queue[i].has(number)) return i
    }
 
    return -1;
}