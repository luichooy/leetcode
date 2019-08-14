export default n => {
  const make = n => {
    if (n === 1) {
      return ['0', '1']
    } else {
      const result = []
      const prev = make(n - 1)
      const max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }

  return make(n)
}
