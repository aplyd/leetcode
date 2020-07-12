function truthCheck(collection, pre) {
	return collection.every(i => {
		return i.hasOwnProperty(pre) && i[pre]
	})
}

module.exports = truthCheck
