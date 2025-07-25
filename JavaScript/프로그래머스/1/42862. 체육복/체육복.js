function solution(n, lost, reserve) {
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    
    let reserveArr = reserve.filter((el)=>lost.indexOf(el) === -1)//여벌 친구중에 도난아닌 애들만
    let lostArr =  lost.filter((el)=>reserve.indexOf(el) === -1) // 도난 친구중에 여벌 아닌 애들만 
    
    for (r of reserveArr) {
       const isPrev = lostArr.indexOf(r-1)
       const isNext = lostArr.indexOf(r+1)
       if (isPrev !== -1) {
            lostArr.splice(isPrev,1)
            continue
       } else if(isNext !== -1) {
            lostArr.splice(isNext,1)
            continue
       } 
        
    }
    return n-lostArr.length;
 
}