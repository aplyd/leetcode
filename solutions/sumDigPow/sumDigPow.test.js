function sumDigPow(a, b) {
	const nums = []
	const check = num => {
		const arr = num.toString().split('')
		const result = arr.reduce((acc, curr, index) => {
			acc += Math.pow(curr, index + 1)
			return acc
		}, 0)
		return num === result
	}
	console.log(Math.pow(9, 2))
	for (let i = a; i <= b; i++) {
		if (check(i)) {
			nums.push(i)
		}
	}
	return nums
}

test('', () => {
	expect(sumDigPow(1, 100)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
})
