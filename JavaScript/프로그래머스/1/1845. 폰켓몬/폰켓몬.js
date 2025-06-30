function solution(nums) {
    const monNum = nums.length/2
    const noDubplicate = [...new Set(nums)]
    let total 
    if (noDubplicate.length <monNum) return noDubplicate.length
    return monNum;
}