const convertToRoman = require('./convertToRoman')

test('', () => {
	const result = convertToRoman(2)
	expect(result).toBe('II')
})
test('', () => {
	const result = convertToRoman(3)
	expect(result).toBe('III')
})
test('', () => {
	const result = convertToRoman(4)
	expect(result).toBe('IV')
})
test('', () => {
	const result = convertToRoman(5)
	expect(result).toBe('V')
})
test('', () => {
	const result = convertToRoman(9)
	expect(result).toBe('IX')
})

test('', () => {
	const result = convertToRoman(12)
	expect(result).toBe('XII')
})
test('', () => {
	const result = convertToRoman(16)
	expect(result).toBe('XVI')
})
