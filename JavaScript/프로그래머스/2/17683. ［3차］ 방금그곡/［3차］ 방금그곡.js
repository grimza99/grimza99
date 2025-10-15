function splitWithHash(str) {
  const groups = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === "#") {
      groups.push(str[i] + "#");
      i++; 
    } else if (str[i] !== "#") {
      groups.push(str[i]);
    }
  }
    
  return groups;
}

function getStringByTimeWithHash(str, time) {
  const groups = splitWithHash(str);
  const len = groups.length;

  if (time <= len) {
    return groups.slice(0, time).join("");
  } else {
    const repeatCount = Math.ceil(time / len);
    const repeated = Array(repeatCount).fill(groups).flat();
    return repeated.slice(0, time).join("");
  }
}

const createMusicMap = (musicinfos,musicMap) => {
        musicinfos.map((musicinfo,i)=> {
        const splicedInfo = musicinfo.split(',')
        const [sh, sm] = splicedInfo[0].split(":").map(Number);
        const [eh, em] = splicedInfo[1].split(":").map(Number);
        const playedTime =  (eh * 60 + em) - (sh * 60 + sm);
        const realSong = getStringByTimeWithHash(splicedInfo[3],playedTime)
        const map = {
            time:playedTime,
            name:splicedInfo[2],
            song:realSong,
        }
        musicMap.set(i,map)
    })
    
}

const checkIsThatSong = (listen,realSong) => {
    const listenSongArr = splitWithHash(listen)
    const realSongArr = splitWithHash(realSong)
    
      for (let i = 0; i <= realSongArr.length - listenSongArr.length; i++) {
        let match = true;
        for (let j = 0; j < listenSongArr.length; j++) {
          if (realSongArr[i + j] !== listenSongArr[j]) {
            match = false;
            break;
          }
        }
        if (match) return true;
      }
      return false;
}

function solution(m, musicinfos) {
    const musicMap = new Map()
    createMusicMap(musicinfos,musicMap)
    let target = []
    
    for (key of musicMap.keys()) {
        const info = musicMap.get(key)
        const isThatSong = checkIsThatSong(m,info.song)
        
        if (isThatSong) target.push([info.name,info.time])
    }
    if (target.length === 0) return "(None)"
    

        let time = 0
        let targetIdx = 0 
        
        for (let i = 0 ; i < target.length; i ++) {
            if (time < target[i][1]) {
                time = target[i][1]
                targetIdx = i
            }
        }

        return target[targetIdx][0]
}