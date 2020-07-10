const missingLetters = require('./missingLetters')

test('', () => {
	const result = missingLetters('abcdefghijklmnopqrstuvwxyz')
	expect(result).toBe(undefined)
})
