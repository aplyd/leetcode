function i(str) {
	const arr = str.split('')
	const letters = arr.reduce(
		(acc, curr) => {
			if (['a', 'e', 'i', 'o', 'u'].includes(curr.toLowerCase())) {
				acc.vowels.push(curr)
			} else {
				acc.consonants.push(curr)
			}
			return acc
		},
		{ vowels: [], consonants: [] }
	)

	if (
		!arr.length ||
		arr[0].toLowerCase() === 'i' ||
		letters.vowels.length >= letters.consonants.length ||
		arr[0] === arr[0].toLowerCase()
	) {
		return 'Invalid word'
	}

	return `i${str}`
}

test('', () => {
	expect(i('Phone')).toBe('iPhone')
	expect(i('World')).toBe('iWorld')
	expect(i('Human')).toBe('iHuman')
	expect(i('')).toBe('Invalid word')
	expect(i('Inspire')).toBe('Invalid word')
	expect(i('East')).toBe('Invalid word')
	expect(i('Peace')).toBe('Invalid word')
	expect(i('road')).toBe('Invalid word')
})
