function solution(n, wires) {
    let minDiff = n
    
    const getGraph = (skipIdx) => {
        const graph = Array.from({length:n+1},()=>[])
        wires.forEach(([a,b],idx)=>{
            if (idx === skipIdx) return
            graph[a].push(b)
            graph[b].push(a)
        })
        return graph
    }
    
    const dfs = (graph) => {
        let count = 1
        const nodeArr = [1]
        const visited = Array.from({length:n+1},()=>(false))
        visited[1] = true
        
        while (nodeArr.length) {
            const node = nodeArr.shift()
                for (const next of graph[node]){
                    if (!visited[next]){
                        nodeArr.push(next)
                    visited[next] = true
                    count++
                    }
                }
        }
       return count
    }
 
    for (let i = 0 ; i < wires.length ; i ++){
        const skipedGraph = getGraph(i)
        const count = dfs(skipedGraph)
        const otherCount = n-count
        
        minDiff = Math.min(minDiff,Math.abs(count-otherCount))
    }

    return minDiff;
}