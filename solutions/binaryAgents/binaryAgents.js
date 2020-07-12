function binaryAgent(str) {
	return str
		.split(' ')
		.map(bin => {
			return String.fromCharCode(parseInt(bin, 2))
		})
		.join('')
}

module.exports = binaryAgent
