//www.codewars.com/kata/581e014b55f2c52bb00000f8/solutions/javascript

https: function decipherThis(str) {
	const wordsArr = str.split(' ')
	const output = []

	for (let word = 0; word < wordsArr.length; word++) {
		const nums = []
		const newWord = []
		for (let letter = 0; letter < wordsArr[word].length; letter++) {
			if (!isNaN(wordsArr[word][letter])) {
				nums.push(wordsArr[word][letter])
			} else {
				newWord.push(wordsArr[word][letter])
			}
		}
		output.push([
			String.fromCharCode(parseInt(nums.join(''), 10)),
			...newWord,
		])
	}

	return output
		.map(arr => {
			const lastLetter = arr[arr.length - 1]
			const secondLetter = arr[1]
			arr[arr.length - 1] = secondLetter
			arr[1] = lastLetter
			return arr.join('')
		})
		.join(' ')
}

test('', () => {
	expect(
		decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
	).toBe('Have a go at this and see how you do')
})
