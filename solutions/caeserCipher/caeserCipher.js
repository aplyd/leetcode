// uppercase charcodes are 65-90
function cipher(str) {
	return str
		.split('')
		.reduce((acc, curr) => {
			let charCode = curr.charCodeAt(0)
			if (charCode > 64 && charCode < 91) {
				for (let i = 0; i < 13; i++) {
					charCode + 1 > 90 ? (charCode = 65) : charCode++
				}
				acc.push(String.fromCharCode(charCode))
			} else {
				acc.push(curr)
			}
			return acc
		}, [])
		.join('')
}

module.exports = cipher
