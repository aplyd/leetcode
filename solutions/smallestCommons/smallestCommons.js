function smallestCommons(arr) {
	const [one, two] = arr
	let smaller, bigger
	if (one > two) {
		smaller = two
		bigger = one
	} else {
		bigger = two
		smaller = one
	}

	// get range of numbers sorted by largest first
	const range = []
	for (let i = bigger; i >= smaller; i--) {
		range.push(i)
	}

	// loop over the numbers to see if they're divisible
	const allNumsDivisible = (arr, num) => {
		return arr.every(i => num % i === 0)
	}

	let targetNum
	let largestNum = range[0]
	while (true) {
		if (allNumsDivisible(range, largestNum)) {
			targetNum = largestNum
			break
		} else {
			largestNum = largestNum + range[0]
		}
	}

	return targetNum
}

module.exports = smallestCommons
