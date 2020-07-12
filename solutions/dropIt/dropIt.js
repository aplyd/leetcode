function dropIt(arr, func) {
	let index
	for (let i = 0; i < arr.length; i++) {
		console.log(func(arr[i]))
		if (func(arr[i])) {
			index = i
			break
		}
	}

	if (index === 0) {
		return arr
	} else if (!index) {
		return []
	} else {
		return [...arr.slice(index)]
	}
}

module.exports = dropIt
