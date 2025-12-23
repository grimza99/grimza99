function solution(n, computers) {
    let count = 0
    const visited = Array(n).fill(false)
    
    const dfs = (el) => {
        visited[el] = true
        
        for (let j = 0;j<n  ; j++){
            if (!visited[j] && computers[el][j]===1){
                dfs(j)
            }
        }
        
        
    }
    for (let i =0 ;i <n ; i++) {
        if (!visited[i]){
            dfs(i)
            count++
        }
    }
    return count;
}