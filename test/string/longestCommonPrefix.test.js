import longestCommonPrefix from '../../code/string/longestCommonPrefix'

describe('longestCommonPrefix', () => {
    it('["flower","flow","flight"]', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    })

    it('["dog","racecar","car"]', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
    })

    it('["a"]', () => {
        expect(longestCommonPrefix(['a'])).toBe('a')
    })


})
