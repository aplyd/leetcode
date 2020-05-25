const lengthOfLastWord = require('./lengthOfLastWords')

test('', () => {
	const string = 'hello world'
	const answer = 5
	expect(lengthOfLastWord(string)).toBe(answer)
})

test('', () => {
	const string = 'a '
	const answer = 1
	expect(lengthOfLastWord(string)).toBe(answer)
})

test('empty string', () => {
	const string = ' '
	const answer = 0
	expect(lengthOfLastWord(string)).toBe(answer)
})

test('really empty string', () => {
	const string = '       '
	const answer = 0
	expect(lengthOfLastWord(string)).toBe(answer)
})

test('actual empty string', () => {
	const string = ''
	const answer = 0
	expect(lengthOfLastWord(string)).toBe(answer)
})

test('a', () => {
	const string = 'a'
	const answer = 1
	expect(lengthOfLastWord(string)).toBe(answer)
})
