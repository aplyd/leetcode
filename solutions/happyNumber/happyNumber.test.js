const isHappy = require('./happyNumber')

test('19', () => {
	expect(isHappy(19)).toBe(true)
})

test('2', () => {
	expect(isHappy(2)).toBe(false)
})
