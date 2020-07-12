const addTogether = require('./addTogether')

test('', () => {
	const result = addTogether(5)(7)
	expect(result).toBe(12)
})
test('', () => {
	const result = addTogether('http://bit.ly/IqT6zt')
	console.log(result)
	expect(result).toBe(undefined)
})
test('', () => {
	const result = addTogether(2, 3)
	expect(result).toBe(5)
})
