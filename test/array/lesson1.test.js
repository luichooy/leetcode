import combineTelNumber from '../../code/array/lesson1'

test('combineTel(23)', () => {
  expect(combineTelNumber('23')).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf'
  ])
})

test('combineTel(234)', () => {
  expect(combineTelNumber('234')).toEqual([
    'adg',
    'adh',
    'adi',
    'aeg',
    'aeh',
    'aei',
    'afg',
    'afh',
    'afi',
    'bdg',
    'bdh',
    'bdi',
    'beg',
    'beh',
    'bei',
    'bfg',
    'bfh',
    'bfi',
    'cdg',
    'cdh',
    'cdi',
    'ceg',
    'ceh',
    'cei',
    'cfg',
    'cfh',
    'cfi'
  ])
})
