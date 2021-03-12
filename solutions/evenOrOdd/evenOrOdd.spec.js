function evenOrOdd(str) {
	const nums = str.split('').reduce(
		(acc, curr) => {
			if (Number(curr) % 2 === 0) {
				acc.even += Number(curr)
			} else {
				acc.odd += Number(curr)
			}

			return acc
		},
		{ even: 0, odd: 0 }
	)

	if (nums.even > nums.odd) {
		return 'Even is greater than Odd'
	} else if (nums.even < nums.odd) {
		return 'Odd is greater than Even'
	} else {
		return 'Even and Odd are the same'
	}
}

test('', () => {
	expect(evenOrOdd('12')).toBe('Even is greater than Odd')
	expect(evenOrOdd('123')).toBe('Odd is greater than Even')
	expect(evenOrOdd('112')).toBe('Even and Odd are the same')
})
