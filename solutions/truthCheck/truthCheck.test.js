const truthCheck = require('./truthCheck')

test('', () => {
	const result = truthCheck(
		[
			{ user: 'Tinky-Winky', sex: 'male' },
			{ user: 'Dipsy', sex: 'male' },
			{ user: 'Laa-Laa', sex: 'female' },
			{ user: 'Po', sex: 'female' },
		],
		'sex'
	)
	expect(result).toBe(true)
})
test('', () => {
	const result = truthCheck(
		[
			{ user: 'Tinky-Winky', sex: 'male', age: 0 },
			{ user: 'Dipsy', sex: 'male', age: 3 },
			{ user: 'Laa-Laa', sex: 'female', age: 5 },
			{ user: 'Po', sex: 'female', age: 4 },
		],
		'age'
	)
	expect(result).toBe(false)
})
