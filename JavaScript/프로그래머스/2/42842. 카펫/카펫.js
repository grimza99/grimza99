function solution(brown, yellow) {
    let minWidth = Math.ceil((brown/2+1)/2)
    
    for (let w = minWidth ; w <=(brown/2+1) ;w++){
         const h =  brown/2+2-w
        if (w * h === brown + yellow && w >=h) return [w,h]
    }
}