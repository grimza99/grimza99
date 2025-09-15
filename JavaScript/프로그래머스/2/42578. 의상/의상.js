function solution(clothes) {    
    const obj = {}
    
    clothes.forEach(([name,type])=> {
        if (obj[type]) {
            obj[type].push(name)
        } else {
            obj[type] = [name]
        }
    })
    
    
        
  
    return Object.values(obj).map((items)=> items.length+1).reduce((acc,cur)=> acc*cur,1) -1
}