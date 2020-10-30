const highestAndLowest = numbers => {
	const nums = numbers
		.split(' ')
		.map(i => parseInt(i, 10))
		.sort((a, b) => a - b)

	const result = `${nums[nums.length - 1]} ${nums[0]}`

	return result
}

test('', () => {
	expect(highestAndLowest('1 2 3 4 5')).toEqual('5 1')
	expect(highestAndLowest('1 2 -3 4 5')).toEqual('5 -3')
	expect(highestAndLowest('1 9 3 4 -5')).toEqual('9 -5')
})
