const sumAll = require('./sumAllNumbersInRange')

test('should pass', () => {
	expect(sumAll([1, 4])).toBe(10)
})
