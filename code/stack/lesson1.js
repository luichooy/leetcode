export default arr => {
  const result = []
  let pre_first, pre_seconds
  while (arr.length) {
    const item = arr.shift()
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop()
        }
        break
      case 'D':
        pre_first = result.pop()
        result.push(pre_first, 2 * pre_first)
        break
      case '+':
        pre_first = result.pop()
        pre_seconds = result.pop()
        result.push(pre_seconds, pre_first, pre_first + pre_seconds)
        break
      default:
        result.push(item * 1)
    }
  }

  return result.reduce((sum, item) => sum + item, 0)
}
