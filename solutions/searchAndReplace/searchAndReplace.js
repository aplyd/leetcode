function sAndR(str, before, after) {
	const indexStart = str.indexOf(before)

	const afterWithCapString =
		before.split('')[0].toLowerCase() === before.split('')[0]
			? after
			: [after.split('')[0].toUpperCase(), ...after.slice(1)].join('')

	const firstPart = str.slice(0, indexStart)
	const secondPart = str.slice(indexStart + before.length)
	console.log([firstPart, afterWithCapString, secondPart].join(''))

	return [firstPart, afterWithCapString, secondPart].join('')
}

module.exports = sAndR
