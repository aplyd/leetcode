const orbitalPeriod = require('./orbitalPeriod')

test('', () => {
	const result = orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])
	expect(result).toStrictEqual([{ name: 'sputnik', orbitalPeriod: 86400 }])
})
