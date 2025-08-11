function solution(jobs) {
    let totalCount = jobs.length
    
    jobs = jobs.map((job,idx)=>  [...job,idx]).sort((a,b)=> a[0]-b[0])// 요청시각 오름차순 정렬 & 인덱스 추가 
    let seconds = 0 // 시간 카운트 (요청이 들어왔는지 파악)
    let que = [] //대기 큐
    let answer = [];
    let current
  
    const getFirst = (jobs) => {
        if (jobs.length === 1) return jobs
       return jobs.sort((a,b)=> 
          a[1] !== b[1] ? a[1] - b[1] :
          a[0] !== b[0] ? a[0] - b[0] :
          a[2] - b[2])
    }
   
    while (jobs.length> 0) {
        que = jobs.filter((job)=>job[0] <= seconds ) // 시간 카운트 (요청이 들어왔는지 파악)
        if (que.length >0) {
            current = getFirst(que)[0] // 대기 큐에 있는것 중에 우선순위
            const idx = jobs.indexOf(current);   //실행 하는 할일은 jobs 에서 삭제
            jobs.splice(idx, 1);

            answer.push(seconds+current[1]-current[0]);
            seconds += current[1]
        } else {
            seconds ++
        }
        
    }
    
    return Math.floor(answer.reduce((acc,current)=> acc+current,0)/totalCount)

}