// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29

const sumRows = n => {
	let num = -1
	let rowNums = []
	let row = 1
	while (true) {
		for (let i = 0; i < row; i++) {
			num += 2
			rowNums.push(num)
		}

		if (row === n) {
			break
		}
		row++
		rowNums = []
	}
	return rowNums.reduce((acc, curr) => {
		return (acc += curr)
	}, 0)
}

test('', () => {
	expect(sumRows(42)).toBe(74088)
})
