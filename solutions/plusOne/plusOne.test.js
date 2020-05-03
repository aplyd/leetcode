const plusOne = require('./plusOne')

test('', () => {
	expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
})

test('', () => {
	expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2])
})

test('single 9', () => {
	expect(plusOne([9])).toStrictEqual([1, 0])
})

test('0', () => {
	expect(plusOne([0])).toStrictEqual([1])
})

test('99', () => {
	expect(plusOne([9, 9])).toStrictEqual([1, 0, 0])
})
