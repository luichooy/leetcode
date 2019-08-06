import findSubstr from '../../code/string/lesson2'

test('findSubStr(00110011)', () => {
  expect(findSubstr('00110011')).toBe(6)
})

test('findSubStr(10101)', () => {
  expect(findSubstr('10101')).toBe(4)
})
