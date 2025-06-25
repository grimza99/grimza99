function solution(video_len, pos, op_start, op_end, commands) {
    // 형식1: "0000" 형식2: ["00","00"] 형식3:"00:00"
    
    const timeToString = (time) =>  time.split(":").join("") //1형식변환 

    const timeToArray = (time) =>   time.split(":") //2형식 변환
    const toSeconds = (time) => time.split(":").map(Number)[0] * 60 + time.split(":").map(Number)[1];
    
    const isPreview = (time)=> { //1형식으로 프리뷰인지 확인후 형식3으로 반환
      return (toSeconds(op_start) <= toSeconds(time) && toSeconds(time) < toSeconds(op_end)) ? op_end : time;
    };
    
    let currentTime = isPreview(pos) // 맨 처음 pos 시간이 프리뷰시간인지 확인 
    
    const formatTime = (targetTime, command) => { //명령에 맞게 시간을 계산후 문자열배열 리턴 
        let [minute, seconds] = timeToArray(targetTime).map(Number);
        let total = minute * 60 + seconds + (command === "prev" ? -10 : 10);
        if (total < 0) total = 0;
        
        const newMinute = Math.floor(total / 60);
        const newSeconds = total % 60;
        return [String(newMinute), String(newSeconds)];
    }
    
    for (command of commands) {
        const stringArray = formatTime(currentTime,command)
        
        if (stringArray[0] < 0) { //-분일때 00:00초로 리셋 
            currentTime = "00:00"
        } else if (timeToString(video_len) < stringArray[0].padStart(2, "0")+ stringArray[1].padStart(2, "0")) {
            currentTime = video_len
        }else {
            currentTime = isPreview(stringArray.join(":"))
        }
    }
    
    const [minute,seconds] = currentTime.split(":")
    return minute.padStart(2, "0") + ":" + seconds.padStart(2, "0");
        
}