function order(words) {
	const arr = words.split(' ')
	const wordLabels = {
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
		9: null,
	}

	arr.forEach((word, index) => {
		for (let i = 0; i < word.length; i++) {
			if (wordLabels.hasOwnProperty(parseInt(word[i], 10))) {
				wordLabels[word[i]] = arr[index]
			}
		}
	})

	return Object.values(wordLabels)
		.filter(word => word !== null)
		.join(' ')
}

test('', () => {
	expect(order('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est')
})
