export default (deck) => {
  if (deck.length < 2) return false

  const getGCD = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return getGCD(b, a % b)
    }
  }

  const countHash = deck.reduce((hash, num) => {
    if (hash[num]) {
      hash[num]++
    } else {
      hash[num] = 1
    }
    return hash
  }, {})

  const count = Object.values(countHash).sort()

  return count.length > 1 ? count.reduce(getGCD) > 1 : count[0] > 1
}
