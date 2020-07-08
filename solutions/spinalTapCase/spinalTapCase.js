function spinalTapCase(str) {
	const charArr = str.replace(/\s+/g, '-')
	const newArr = []
	for (let i = 0; i < charArr.length; i++) {
		if (
			i > 0 &&
			charArr[i].toLowerCase() !== charArr[i] &&
			charArr[i - 1] !== '-' &&
			charArr[i - 1] !== '_'
		) {
			newArr.push('-')
			newArr.push(charArr[i])
		} else if (charArr[i] === '_') {
			newArr.push('-')
		} else {
			newArr.push(charArr[i])
		}
	}
	return newArr.join('').toLowerCase()
}

module.exports = spinalTapCase
