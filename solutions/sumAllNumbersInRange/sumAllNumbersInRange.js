// it's ugly but it works ¯\_(ツ)_/¯
const sumAllNumbersInRange = arr => {
	let smaller, bigger
	const [one, two] = arr
	if (one > two) {
		bigger = one
		smaller = two
	} else {
		bigger = two
		smaller = one
	}

	let sum = 0
	for (let i = smaller; i < bigger + 1; i++) {
		sum += i
	}

	return sum
}

module.exports = sumAllNumbersInRange
