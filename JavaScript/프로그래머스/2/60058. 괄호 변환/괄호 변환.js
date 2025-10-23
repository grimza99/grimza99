const open = '('
const close = ')'

const findIsBalanced = (str) => { //균형 잡혔는지 알아내는 함수 
    let count = 0
    for (el of str) {
        if (el === open) {
            count++ 
        } else {
            count--
        }
    }
    return count === 0 ? true : false 
}

const findIsCorrect = (str) => { //올바른 괄호 문자열인지를 알아내는 함수 
    if (str === '') return true //용어의 정의 1번 충족
    if (!findIsBalanced(str)) return false
    
    let count = 0
    
    for (el of str) {
        if (count === -1) return false
        if (el === open) {
            count++
        }else {
            count--
        }
    }
    return true
}

function solution(p) {
    if (findIsCorrect(p)) return p
    
    let count = 0
    let u = '', v = ''
    for (let i = 0; i < p.length; i++) {
    p[i] === open ? count++ : count--
    if (count === 0) {
      u = p.slice(0, i + 1)
      v = p.slice(i + 1)
      break
    }
  }

  if (findIsCorrect(u)) {
    return u + solution(v)
  }

  return (
    open +
    solution(v) +
    close +
    u
      .slice(1, -1)
      .split('')
      .map((el) => (el === open ? close : open))
      .join('')
  )
}

