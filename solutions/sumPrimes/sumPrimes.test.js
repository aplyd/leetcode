const sumPrimes = require('./sumPrimes')

test('', () => {
	const result = sumPrimes(10)
	expect(result).toBe(17)
})

test('', () => {
	const result = sumPrimes(977)
	expect(result).toBe(73156)
})
