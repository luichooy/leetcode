export default str => {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const arr = str.split('').map(s => {
    if (map[s]) {
      return map[s]
    }
  })

  const combineTelNumber = arr => {
    const result = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        result.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    arr.splice(0, 2, result)
    if (arr.length > 1) {
      combineTelNumber(arr)
    } else {
      return result
    }
    return arr[0]
  }

  return combineTelNumber(arr)
}
