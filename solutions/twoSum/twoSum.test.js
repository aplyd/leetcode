const twoSum = require('./twoSum')

test('', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
})

test('', () => {
	const nums = [14, 7, 1, 8]
	const target = 15
	expect(twoSum(nums, target)).toStrictEqual([1, 3])
})
