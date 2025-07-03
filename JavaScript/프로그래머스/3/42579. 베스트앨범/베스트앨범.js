function solution(genres, plays) {
    const data = []; 
    const result = [];

    genres.forEach((genre, idx) => {

    const found = data.find(item => item[0] === genre);
    
     if (found) {
        found[1].push([plays[idx], idx]);
      } else {
        data.push([genre, [[plays[idx], idx]]]);
      }
    });
    
    data.sort((a, b) => {
      const sumA = a[1].reduce((acc, [plays]) => acc + plays, 0);
      const sumB = b[1].reduce((acc, [plays]) => acc + plays, 0);
      return sumB - sumA;
    });

    data.forEach(([genre, songs]) => {
      songs.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

      const top = songs.slice(0, 2);
      top.forEach(([, id]) => result.push(id));
});
  return result;

}
