const cipher = require('./caeserCipher')

test('', () => {
	const result = cipher('SERR PBQR PNZC')
	expect(result).toBe('FREE CODE CAMP')
})
