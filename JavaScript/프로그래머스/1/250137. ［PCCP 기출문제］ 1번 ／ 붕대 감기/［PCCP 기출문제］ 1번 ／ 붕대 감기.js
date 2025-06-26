function solution(bandage, health, attacks) {
    
    let currentHealth = health
    const total = attacks[attacks.length-1][0]
    let duration = 0
    
    currentAttack = attacks.find((attack)=> attack[0] === 1 )
    let answer = []
    
    for (let i = 1 ;i <= total; i++) {
        currentAttack = attacks.find((attack)=> attack[0] === i )
        if (currentAttack) { //공격 타이밍 일때
            duration = 0 
           currentHealth = currentHealth - currentAttack[1] 
           if (currentHealth <= 0 ) return currentHealth = -1 
        } else { //공격타이밍이 아닐때 
           duration ++  
           const recoveryAmount =  duration===bandage[0] ? bandage[1]+bandage[2] : bandage[1]
            currentHealth = currentHealth + recoveryAmount 
            if (duration===bandage[0]) duration = 0 
           if (currentHealth >= health)  currentHealth = health
           
        }
    }
    return  currentHealth;
}