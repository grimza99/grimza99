function solution(n, computers) {
    const visited = Array(n).fill(false)
    let count = 0 
    
    const dfs = (el)=> {
        visited[el] = true
        for (let i = 0; i<n;i++){
            if (computers[el][i]===1 && !visited[i]){
                dfs(i)
            }
        }
    }
    for (let i=0 ; i<n; i++){
        if (!visited[i]){
            dfs(i)
            count++
        }
    }
    return count
}