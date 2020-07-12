const steamRoll = require('./steamRoller')

test('', () => {
	const result = steamRoll([[['a']], [['b']]])
	expect(result).toStrictEqual(['a', 'b'])
})

test('', () => {
	const result = steamRoll([1, [2], [3, [[4]]]])
	expect(result).toStrictEqual([1, 2, 3, 4])
})
