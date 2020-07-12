const smallestCommons = require('./smallestCommons')

test('', () => {
	const result = smallestCommons([1, 5])
	console.log(result)
	expect(result).toBe(60)
})

test('big numbers', () => {
	const result = smallestCommons([1, 13])
	console.log(result)
	expect(result).toBe(360360)
})
