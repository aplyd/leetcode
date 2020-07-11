const uniteUnique = require('./sortedUnion')

test('', () => {
	const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
	expect(result).toStrictEqual([1, 3, 2, 5, 4])
})
