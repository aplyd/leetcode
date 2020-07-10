const sAndR = require('./searchAndReplace')

test('', () => {
	const result = sAndR('Let us go to the store', 'store', 'mall')
	expect(result).toBe('Let us go to the mall')
})
