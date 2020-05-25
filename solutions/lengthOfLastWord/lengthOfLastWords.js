const lengthOfLastWord = s => {
	if (s.length > 1) {
		const arr = s.split(' ')
		return arr[arr.length - 2].length > 0 ? arr[arr.length - 2].length : 0
	} else {
		return 0
	}
}

module.exports = lengthOfLastWord
