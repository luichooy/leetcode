const romanToIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

export default str => {
  let num = 0
  for (let i = 0, len = str.length; i < len; i++) {
    const first = romanToIntMap[str[i]]
    const second = romanToIntMap[str[i + 1]]

    if (second) {
      if (first >= second) {
        num += first
      } else {
        num += second - first
        i++
      }
    } else {
      num += first
    }
  }

  return num
}
