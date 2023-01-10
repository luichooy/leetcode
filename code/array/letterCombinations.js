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

  let arr = str.split('').map(item => map[item])

  if (!arr.length) {
    return arr
  }


  const combine = (source1, source2) => {
    const combined = []
    for (let i = 0; i < source1.length; i++) {
      for (let j = 0; j < source2.length; j++) {
        combined.push(source1[i] + source2[j])
      }
    }

    return combined
  }

  arr.unshift(arr.shift().split(''))
  while (arr.length > 1) {
    arr.unshift(combine(arr.shift(), arr.shift().split('')))
  }

  return arr[0]
}