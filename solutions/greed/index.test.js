// https:www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

const score = dice => {
	const totalScore = dice.reduce((acc, curr) => {
		acc[curr] ? (acc[curr] = acc[curr] + 1) : (acc[curr] = 1)
		return acc
	}, {})

	console.log(totalScore)

	return Object.entries(totalScore)
		.sort()
		.reduce((acc, curr) => {
			console.log(curr[0], curr[1])
			if (curr[1] > 2) {
				if (Number(curr[0]) === 1) {
					acc += Number(curr[0]) * 1000
					curr[1] = curr[1] - 3
				} else {
					acc += Number(curr[0]) * 100
					curr[1] = curr[1] - 3
				}
			}

			console.log('should have changed', curr[0], curr[1])

			if (Number(curr[0]) === 1) {
				acc += Number(curr[0]) * curr[1] * 100
			} else if (Number(curr[0]) === 5) {
				acc += Number(curr[0]) * curr[1] * 10
			}

			return acc
		}, 0)
}

test('', () => {
	expect(score([2, 3, 4, 6, 2])).toBe(0)
})

test('', () => {
	expect(score([4, 4, 4, 3, 3])).toBe(400)
})

test.only('', () => {
	expect(score([1, 1, 1, 2, 2])).toBe(1000)
})
