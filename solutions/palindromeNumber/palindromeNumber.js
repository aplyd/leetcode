const isPalindrome = function (x) {
	const reverse = x.toString().split('').reverse().join('')
	const result = reverse === x.toString()
	return result
}

module.exports = isPalindrome
