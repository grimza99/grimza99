function solution(n, wires) {
    let diff = n
    
    const getGraph = (skipIdx) => {
        const graph = Array.from({length:n+1},()=>[])
        
        wires.forEach(([a,b],idx)=> {
            if (idx ===skipIdx) return
                graph[a].push(b)
                graph[b].push(a)
        })
        return graph
    }
    
    const bfs = (graph) => {
        const visited = Array(n+1).fill(false)
        visited[1] = true
        let count = 1
        let queue = [1]
        
        while (queue.length) {
            const node = queue.shift()
            for (const next of graph[node]) {
                if (!visited[next]) {
                    visited[next] =true
                    queue.push(next)
                    count++
                }
            }
        }
        return count
    }
    
    for (let i = 0 ; i < wires.length;i++ ) {
        const graph = getGraph(i)
        const node = bfs(graph)
        const anotherNode = n-node
        diff = Math.min(diff,Math.abs(node-anotherNode))
    }
    return diff
}