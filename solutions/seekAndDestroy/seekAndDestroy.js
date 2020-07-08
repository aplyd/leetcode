function destroyer(arr, ...args) {
	return arr.filter(i => {
		if (args.includes(i)) {
			return null
		}
		return i
	})
}

module.exports = destroyer
