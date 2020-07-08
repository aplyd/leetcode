function whatIsInAName(arr, targetObj) {
	return arr.filter(obj => {
		const result = Object.entries(targetObj).every(prop => {
			return obj.hasOwnProperty(prop[0]) && obj[prop[0]] === prop[1]
		})
		return result ? obj : null
	})
}

module.exports = whatIsInAName
