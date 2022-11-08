function peopleIndexes(favoriteCompanies: string[][]): number[] {
	// sort array by sub array length
	const sorted = favoriteCompanies
		// store original index and flatten sub array
		.map((val, i) => ({ val: val.sort().join().replace(/,/g, ''), i }))
		.sort((a, b) => {
			return b.val.length - a.val.length
		})

	// loop over flattened sub arrays and check for matching substring
	return (
		sorted
			.reduce<number[]>((acc, curr, i) => {
				const isSubset = sorted.some((subObj, subI) => {
					if (i === subI) return false
					return subObj.val.includes(curr.val)
				})
				if (!isSubset) acc.push(curr.i)
				return acc
			}, [])
			// sort indexes before returning
			.sort()
	)
}

it('', () => {
	expect(
		peopleIndexes([
			['google', 'microsoft'], //
			['google', 'facebook'],
			['amazon'], //
			['google'],
			['leetcode', 'google', 'facebook'], //
		])
	).toStrictEqual([0, 2, 4])
})

it('', () => {
	expect(
		peopleIndexes([
			['leetcode', 'google', 'facebook'],
			['leetcode', 'amazon'],
			['facebook', 'google'],
		])
	).toStrictEqual([0, 1])
})
