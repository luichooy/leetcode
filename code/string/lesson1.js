export default str => {
  return str
    .split(' ')
    .map(word => {
      return word
        .split('')
        .reverse()
        .join('')
    })
    .join(' ')
}
