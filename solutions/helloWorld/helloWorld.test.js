const greet = (arr = [], i = 0) => {
	const x = [104, 102, 110, 111, 115, 37, 125, 118, 122, 117, 110, 44]

	arr.push(String.fromCharCode(x[i] - i))

	return arr[arr.length - 1] === '!' ? arr.join('') : greet(arr, i + 1)
}
