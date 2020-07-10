const pairElement = require('./dnaPairing')

test('', () => {
	const result = pairElement('ATCGA')
	expect(result).toStrictEqual([
		['A', 'T'],
		['T', 'A'],
		['C', 'G'],
		['G', 'C'],
		['A', 'T'],
	])
})
