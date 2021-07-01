function sortVowels(s) {
	if (s === undefined || s === null || typeof s === 'number') {
		return ''
	}

	const vowels = ['a', 'e', 'i', 'o', 'u']
	return s
		.split('')
		.map((letter, index) => {
			if (vowels.includes(letter) && index + 1 < s.split('').length) {
				return `|${letter}\n`
			} else if (
				!vowels.includes(letter) &&
				index + 1 < s.split('').length
			) {
				return `${letter}|\n`
			} else if (vowels.includes(letter)) {
				return `|${letter}`
			} else {
				return `${letter}|`
			}
		})
		.join('')
}

test('', () => {
	expect(sortVowels('Codewars')).toBe('C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|')
	expect(sortVowels(1337)).toBe('')
})
