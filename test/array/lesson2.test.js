import card from '../../code/array/lesson2'

test('card([1,2,3,4,4,3,2,1])', () => {
  expect(card([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})

test('card([1,1,1,2,2,2,3,3])', () => {
  expect(card([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
})

test('card([1])', () => {
  expect(card([1])).toBe(false)
})

test('card([1,1])', () => {
  expect(card([1, 1])).toBe(true)
})

test('card([1,1,2,2,2,2])', () => {
  expect(card([1, 1, 2, 2, 2, 2])).toBe(true)
})
