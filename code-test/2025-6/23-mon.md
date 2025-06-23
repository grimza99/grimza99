## 바탕화면 정리
https://school.programmers.co.kr/learn/courses/30/lessons/161990

- 날짜 : 2025년 6월 23일
- 걸린시간 : 30분
- 정답률: 52%


```js
function solution(wallpaper) {
    let answer = []
    let row = []
    let column = [] 
    
    for ( let i =0 ; i < wallpaper.length ; i++){
        const strArray = [...wallpaper[i]]                                                              
        strArray.map((str,index)=> {
            if (str==='#'){
                row.push(i)
                column.push(index)
            } 
         } )
    }
    
    const formattedArray = [...new Set(column)].sort((a, b) => a - b);
    answer.push(row[0],formattedArray[0],row[row.length-1]+1,formattedArray[formattedArray.length-1]+1)
    return answer;
}
```
