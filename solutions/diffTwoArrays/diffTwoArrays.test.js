const diffArray = require('./diffTwoArrays')

test('shoud pass', () => {
	expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toStrictEqual([4])
})
