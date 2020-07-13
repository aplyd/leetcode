function palindrome(str) {
	const withoutSpecialChars = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
	const reversed = withoutSpecialChars.toLowerCase().split('').reverse()
	return withoutSpecialChars.split('').every((char, index) => {
		return char === reversed[index]
	})
}

module.exports = palindrome
