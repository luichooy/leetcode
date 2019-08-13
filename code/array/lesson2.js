export default arr => {
  const getGCD = (a, b) => {
    if (b === 0) return a
    return getGCD(b, a % b)
  }

  const str = arr.sort().join('')
  // 单张或多张分组
  const group = str.match(/(\d)\1+|\d/g)

  while (group.length > 1) {
    const a = group.shift().length
    const b = group.shift().length
    const gcd = getGCD(a, b)
    if (gcd === 1) return false
    group.unshift('0'.repeat(gcd))
  }

  return group.length ? group[0].length > 1 : false
}
