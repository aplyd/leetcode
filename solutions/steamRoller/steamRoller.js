function steamRoll(arr) {
	const getNestedValue = (arr, callback) => {
		if (Array.isArray(arr)) {
			arr.forEach(val => {
				if (Array.isArray(val)) {
					return getNestedValue(val, callback)
				} else {
					callback(val)
				}
			})
		} else {
			callback(arr)
		}
	}
	return arr.reduce((acc, curr) => {
		getNestedValue(curr, val => acc.push(val))
		return acc
	}, [])
}

module.exports = steamRoll
