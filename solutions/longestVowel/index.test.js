function solve(s) {
	const vowels = ['a', 'e', 'i', 'o', 'u']

	return s.split('').reduce(
		(acc, curr) => {
			!vowels.includes(curr) ? (acc.counter = 0) : acc.counter++

			acc.counter > acc.longest ? (acc.longest = acc.counter) : null

			return acc
		},
		{ counter: 0, longest: 0 }
	).longest
}

test('', () => {
	expect(solve('codewarriors')).toEqual(2)
	expect(solve('ultrarevolutionariees')).toEqual(3)
	expect(solve('iiihoovaeaaaoougjyaw')).toEqual(8)
})
