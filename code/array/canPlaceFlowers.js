export default (flowerbed, n) => {
  flowerbed = flowerbed.join('')
  const regexp = /(?<!1)0(?!1)/
  let max = 0
  let matched = flowerbed.match(regexp)

  while (matched) {
    max++
    flowerbed = flowerbed.substring(matched.index + 2)
    matched = flowerbed.match(regexp)
  }

  return max >= n
}
