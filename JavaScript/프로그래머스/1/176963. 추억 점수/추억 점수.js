function solution(name, yearning, photo) {
    let countArr = []
    let count = 0
    for (let j =0 ; j<photo.length; j ++ ) {
        for (let i =0; i<name.length; i ++ ){
            if (photo[j].includes(name[i])){
                count = count + yearning[i]
            }
           
            
        } countArr.push(count)
     count = 0
    }
    return countArr
    
}