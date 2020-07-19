function duplicateCount(text) {
	const arr = text.toLowerCase().split('')
	const res = arr.reduce(
		({ count, letters }, curr, index) => {
			for (let i = 0; i < arr.length; i++) {
				if (
					arr[i] === curr &&
					i !== index &&
					letters.indexOf(arr[i]) === -1
				) {
					letters.push(arr[i])
					count++
				}
			}

			return { count, letters }
		},
		{ count: 0, letters: [] }
	)
	console.log(res.letters)
	return res.count
}

test('shoud pass', () => {
	expect(duplicateCount('aabbcde')).toBe(2)
})
