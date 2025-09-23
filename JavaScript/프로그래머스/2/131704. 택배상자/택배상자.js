function solution(order) {
    const main =  Array.from({length:order.length}, (_,i)=> order.length-i) //메인 벨트 - 최적화를 위해 거꾸로 넣음
    const sub = [] //보조 벨트
    let cursor = 0 //order 인덱스
    let count = 0 //트럭에 들어간 박스


    while (cursor < order.length) {
        const orderBox = order[cursor]
        if (main.length === 0 && order[cursor] !== sub[sub.length-1]) return count
        // main 벨트가 다 비었는데 main, sub 둘다 타켓이 아닐때
        if( main[main.length-1] === order[cursor] ) { // 메인 벨트에 있는게 실릴 순서인지 보기 
           main.pop() //main 벨트에서 뺌
           count ++ //트럭에 실음
           cursor++
           continue
        }
        if ( sub[sub.length - 1] === order[cursor]) { //sub 벨트에 있는게 실릴 순서인지 보기
            sub.pop() //sub 벨트에서 빼기 
            count ++ //트럭에 실음
            cursor++
            continue
        }
        const targetBox = main.pop()
        sub.push(targetBox)
    }
    
    return count

}

