const whatIsInAName = require('./whatIsInAName')

test('first', () => {
	const result = whatIsInAName(
		[
			{ first: 'Romeo', last: 'Montague' },
			{ first: 'Mercutio', last: null },
			{ first: 'Tybalt', last: 'Capulet' },
		],
		{ last: 'Capulet' }
	)
	expect(result).toStrictEqual([{ first: 'Tybalt', last: 'Capulet' }])
})

test('second', () => {
	const result = whatIsInAName(
		[{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
		{ apple: 1, bat: 2 }
	)
	console.log(result)
	expect(result).toStrictEqual([
		{ apple: 1, bat: 2 },
		{ apple: 1, bat: 2, cookie: 2 },
	])
})
