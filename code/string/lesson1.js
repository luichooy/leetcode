// export default str => {
//   return str
//     .split(' ')
//     .map(word => {
//       return word
//         .split('')
//         .reverse()
//         .join('')
//     })
//     .join(' ')
// }

// export default str => {
//   return str
//     .split(/\s/g)
//     .map(word => {
//       return word
//         .split('')
//         .reverse()
//         .join('')
//     })
//     .join(' ')
// }

export default str => {
  return str
    .match(/[\w']+/g)
    .map(word => {
      return word
        .split('')
        .reverse()
        .join('')
    })
    .join(' ')
}
