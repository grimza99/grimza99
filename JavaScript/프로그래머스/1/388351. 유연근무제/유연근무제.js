function solution(schedules, timelogs, startday) {
    let memberCount = 0 
    const mod = (n, m) => ((n % m) + m) % m;
    const weekdayIndexes = Array.from({ length: 5 }, (_, i) => mod(5 - startday - i , 7));

    for (let i= 0 ; i < schedules.length; i ++ ) {
        const weekdayTimeLogs = weekdayIndexes.map(idx => timelogs[i][idx]);
        let isLate 
        if (schedules[i]% 100 +10> 59) {
             isLate =  weekdayTimeLogs.some((time)=> schedules[i]+10+40 < time )
        } else {
             isLate =  weekdayTimeLogs.some((time)=> schedules[i]+10 < time )
        }
        
        if (!isLate) {memberCount++}
    }
    

    return memberCount;
        
}