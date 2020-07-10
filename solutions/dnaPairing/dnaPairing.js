// 'ATCGA'

function pairElement(str) {
	const t = 'T',
		a = 'A',
		g = 'G',
		c = 'C'
	return str.split('').reduce((acc, curr) => {
		curr === t && acc.push([t, a])
		curr === a && acc.push([a, t])
		curr === g && acc.push([g, c])
		curr === c && acc.push([c, g])
		return acc
	}, [])
}

module.exports = pairElement
