function validatePin(pin) {
	const arr = pin.split('')
	if (arr.length === 4 || arr.length === 6) {
		return arr.every(
			num => num.charCodeAt(0) > 47 && num.charCodeAt(0) < 58
			// console.log(num.fromCharCodeAt(0))
		)
	} else {
		return false
	}
}

test('', () => {
	expect(validatePin('1234')).toBe(true)
})
