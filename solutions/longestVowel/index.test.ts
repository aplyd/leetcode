function solve(s: string): number {
	const vowels: string[] = ['a', 'e', 'i', 'o', 'u']

	interface Acc {
		counter: number
		longest: number
	}

	return s.split('').reduce(
		(acc: Acc, curr) => {
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
