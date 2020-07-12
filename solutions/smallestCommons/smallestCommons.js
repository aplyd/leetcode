function smallestComons(arr) {
	const [one, two] = arr
	let smaller, bigger
	if (one > two) {
		smaller = two
		bigger = one
	} else {
		bigger = two
		smaller = one
	}

	const range = []
	for (let i = smaller; i <= bigger; i++) {
		range.push([i])
	}

	const multiplyAndCheckForCommons = (arr, count = 2) => {
		const afterMultiplication = arr.map(subArr => {
			const newNum = subArr[0] * count
			return [...subArr, newNum]
		})

		let targetNum
		for (let i = 0; i < afterMultiplication[0].length; i++) {
			const targetFound = afterMultiplication.every(subArr => {
				return subArr.includes(afterMultiplication[0][i])
			})
			if (targetFound) {
				targetNum = afterMultiplication[0][i]
				break
			}
		}

		if (targetNum) {
			return targetNum
		} else {
			return multiplyAndCheckForCommons(afterMultiplication, count + 1)
		}
	}

	return multiplyAndCheckForCommons(range)
}

module.exports = smallestComons
