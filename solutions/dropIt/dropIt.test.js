const dropIt = require('./dropIt')

test('', () => {
	const result = dropIt([1, 2, 3, 4], function (n) {
		return n >= 3
	})

	expect(result).toStrictEqual([3, 4])
})

test('', () => {
	const result = dropIt([0, 1, 0, 1], function (n) {
		return n === 1
	})
	console.log(result)
	expect(result).toStrictEqual([1, 0, 1])
})

test('', () => {
	const result = dropIt([1, 2, 3], function (n) {
		return n > 0
	})
	console.log(result)
	expect(result).toStrictEqual([1, 2, 3])
})
