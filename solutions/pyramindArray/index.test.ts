export function pyramid(n: number) {
	if (n === 0) return []

	const arr: number[][] = []

	for (let i = 0; i < n; i++) {
		const subArr: number[] = []
		for (let j = 0; j <= i; j++) {
			subArr.push(1)
		}
		arr.push(subArr)
	}

	return arr
}

test('', () => {
	expect(pyramid(0)).toStrictEqual([])
	expect(pyramid(1)).toStrictEqual([[1]])
	expect(pyramid(2)).toStrictEqual([[1], [1, 1]])
	expect(pyramid(3)).toStrictEqual([[1], [1, 1], [1, 1, 1]])
})
