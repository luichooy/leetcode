const longestCommonPrefix = arr => {
  let longestPrefix = ''
  let shortest = arr[0]
  arr.forEach(item => {
    if (item.length < arr[0]) {
      shortest = item
    }
  })

  let index = 1
  let match = true
  while (index <= shortest.length && match) {
    longestPrefix = shortest.slice(0, index)
    const regexp = new RegExp(`^${longestPrefix}`)
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!regexp.test(arr[i])) {
        match = false
        longestPrefix = shortest.slice(0, index - 1)
        break
      }
    }

    index++
  }

  return longestPrefix
}

export default longestCommonPrefix
