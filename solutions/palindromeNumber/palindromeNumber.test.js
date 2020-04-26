const isPalindrome = require('./palindromeNumber')

test('should return true', () => {
	expect(isPalindrome(3)).toBe(true)
})

test('should return true', () => {
	expect(isPalindrome(23)).toBe(false)
})

test('should return true', () => {
	expect(isPalindrome(110011)).toBe(true)
})

test('should return false', () => {
	expect(isPalindrome('banana')).toBe(false)
})

test('should handle string', () => {
	expect(isPalindrome('racecar')).toBe(true)
})
