//https://www.codewars.com/kata/5aba8546379d20b9970001e4/train/javascript

function reserve(bookings) {
	const seating = {
		2: { name: 'table for two', seats: 2, quantity: 4 },
		3: { name: 'table for three', seats: 3, quantity: 2 },
		4: { name: 'table for four', seats: 4, quantity: 2 },
		6: { name: 'table for six', seats: 6, quantity: 1 },
		8: { name: 'table for eight', seats: 8, quantity: 1 },
	}

	const output = []
	const notAccepted = []

	bookings.forEach(i => {
		// number of guests matches exact table seating
		if (seating[i] && seating[i].quantity) {
			output.push(seating[i].name)
			seating[i].quantity = seating[i].quantity - 1
		}

		// exact table is no longer available so try to fit at larger table
		// if (!seating[i].quantity) {

		// }

		//
	})

	console.log([
		output,
		`Bookings at the following indexes were not accepted: `,
	])
	return [output, `Bookings at the following indexes were not accepted: `]
}

test('', () => {
	expect(reserve([2, 3, 4, 5, 7, 8, 6, 2])).toStrictEqual([
		[
			'table for two',
			'table for three',
			'table for four',
			'table for six',
			'table for eight',
			'table for two',
		],
		'Bookings at the following indexes were not accepted: 5, 6',
	])
})
