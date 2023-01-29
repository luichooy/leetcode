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

export default str => {
  const codes = str.split('').map(item => map[item])

  if (!codes.length) {
    return codes
  } else if (codes.length === 1) {
    return codes[0].split('')
  }

  const combile = arr => {
    const combiled = []
    for (let i = 0, ilen = arr[0].length; i < ilen; i++) {
      for (let j = 0, jlen = arr[1].length; j < jlen; j++) {
        combiled.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    return combiled
  }

  while (codes.length > 1) {
    const combined = combile(codes)
    codes.splice(0, 2, combined)
  }

  return codes[0]
}