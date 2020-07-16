const register = require('./cashRegister')

test('', () => {
	const result = register(19.5, 20, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
	expect(result).toStrictEqual({ status: 'OPEN', change: [['QUARTER', 0.5]] })
})
