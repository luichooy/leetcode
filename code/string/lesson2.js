export default str => {
  const result = []

  const findSubStr = str => {
    const l = str.match(/^(0+|1+)/)[0]
    const r = (l[0] ^ 1).toString().repeat(l.length)

    const regexp = new RegExp(`^(${l}${r})`)
    if (regexp.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }

  for (let i = 0; i < str.length - 1; i++) {
    let subStr = findSubStr(str.slice(i))

    if (subStr) {
      result.push(subStr)
    }
  }

  console.log(result)
  return result.length
}
