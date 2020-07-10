function missingLetters(str) {
	const arr = str.split('')
	const firstLetterCode = str.charCodeAt(0)
	// const lastLetterCode = str.charCodeAt(str.length - 1)
	for (let i = 0; i < arr.length; i++) {
		if (String.fromCharCode(i + firstLetterCode) !== arr[i]) {
			return String.fromCharCode(i + firstLetterCode)
		}
	}
}

module.exports = missingLetters
