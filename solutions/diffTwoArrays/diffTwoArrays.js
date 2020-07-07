const diffArray = (arr1, arr2) => {
	const newArr = []
	arr1.forEach(i => {
		if (arr2.includes(i)) {
			return
		}
		newArr.push(i)
	})

	arr2.forEach(i => {
		if (arr1.includes(i)) {
			return
		}
		newArr.push(i)
	})

	return newArr
}

module.exports = diffArray
