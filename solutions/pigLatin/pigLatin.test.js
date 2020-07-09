const pigLatin = require('./pigLatin')

test('standard', () => {
	const result = pigLatin('california')
	expect(result).toBe('aliforniacay')
})
test('with the L as second letter', () => {
	const result = pigLatin('glove')
	expect(result).toBe('oveglay')
})

test('algo', () => {
	const result = pigLatin('algorithm')
	expect(result).toBe('algorithmway')
})

test('without vowels', () => {
	const result = pigLatin('rhythm')
	expect(result).toBe('rhythmay')
})
