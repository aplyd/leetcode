const destroyer = require('./seekAndDestroy')

test('test', () => {
	const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3)
	console.log(result)
	expect(result).toStrictEqual([1, 1])
})
