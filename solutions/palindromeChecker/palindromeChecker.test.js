const palindrome = require('./palindromeChecker')

test('', () => {
	const result = palindrome('race car')
	expect(result).toBe(true)
})

test('not a palindrome', () => {
	const result = palindrome('not a palindrome')
	expect(result).toBe(false)
})

test('underscore', () => {
	const result = palindrome('_eye')
	expect(result).toBe(true)
})

test.only('uppercase and punctuation', () => {
	const result = palindrome('A man, a plan, a canal. Panama')
	expect(result).toBe(true)
})
