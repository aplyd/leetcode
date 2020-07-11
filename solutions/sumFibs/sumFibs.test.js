const sumFibs = require('./sumFibs')

test('', () => {
	const result = sumFibs(1000)
	expect(result).toBe(1785)
})
test.only('', () => {
	const result = sumFibs(10)
	expect(result).toBe(10)
})

test('', () => {
	const result = sumFibs(4000000)
	expect(result).toBe(4613732)
})
