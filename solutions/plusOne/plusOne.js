// doesn't work on large numbers
// const plusOne = function (digits) {
// 	let incremented = Number(digits.join('')) + 1

// 	return incremented
// 		.toString()
// 		.split('')
// 		.map(i => Number(i))
// }

// gets complicated on single digits like 0 or 9
// const plusOne = function (digits) {
// 	let lastNum = digits.length - 1

// 	while (true) {
// 		if (digits[lastNum] === 9) {
// 			digits[lastNum] = 0
// 			lastNum = lastNum - 1
// 		} else if (!digits[lastNum]) {
// 			digits.unshift(1)
// 			break
// 		} else {
// 			digits[lastNum] = digits[lastNum] + 1
// 			break
// 		}
// 	}
// 	return digits
// }

const plusOne = function (digits) {
	let added = false
	for (let i = digits.length - 1; i > -1; i--) {
		if (0 === i && digits[i] === 9) {
			digits[i] = 0
			digits.unshift(1)
		} else if (digits[i] === 9) {
			digits[i] = 0
		} else if (!added && digits[i] < 9) {
			digits[i]++
			added = true
		}
	}

	return digits
}

module.exports = plusOne
