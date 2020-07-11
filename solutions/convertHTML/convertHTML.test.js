const convertHTML = require('./convertHTML')

test('', () => {
	const result = convertHTML('Dolce & Gabbana')
	expect(result).toBe('Dolce &amp; Gabbana')
})
