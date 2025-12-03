function solution(n, wires) {
    let diff = n
    
    const getGraph = (skipIdx)=> {
        let graph = Array.from({length:n+1},()=>[])
        wires.forEach(([a,b],idx)=> {
            if(idx ===skipIdx) return
            graph[a].push(b)
            graph[b].push(a)
        })
        
        return graph
    }
    
    const dfs = (graph)=> {
        let count = 1
        let visited = Array.from({length:n+1},()=>false)
        let nodeArr = [1]
        visited[1] = true
        
        while (nodeArr.length > 0) {
            const node = nodeArr.shift()
            for (const next of graph[node]){
                if (!visited[next]) {
                    nodeArr.push(next)
                    visited[next]=true
                    count++
                }
            } 
        }
        return count
    }
    
    for (let i = 0 ; i < wires.length; i++) {
        const graph = getGraph(i)
        const nodeCount = dfs(graph)
        const anotherNode = n-nodeCount
        diff = Math.min(diff,Math.abs(anotherNode-nodeCount) )
    }
    
    return diff;
}