function pigLatin(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	const arr = str.split('')
	if (vowels.includes(arr[0])) {
		return [...arr, 'w', 'a', 'y'].join('')
	} else {
		let translation = []
		for (let i = 0; i < arr.length; i++) {
			if (vowels.includes(arr[i])) {
				translation = [...arr.slice(i), ...arr.slice(0, i), 'a', 'y']
				break
			}
			if (i === arr.length - 1) {
				translation = [...arr, 'a', 'y']
			}
		}
		return translation.join('')
	}
}

module.exports = pigLatin
