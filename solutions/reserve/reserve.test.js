//https://www.codewars.com/kata/5aba8546379d20b9970001e4/train/javascript

function reserve(bookings) {
	const seating = {
		2: { name: 'table for two', seats: 2, available: 4 },
		3: { name: 'table for three', seats: 3, available: 2 },
		4: { name: 'table for four', seats: 4, available: 2 },
		6: { name: 'table for six', seats: 6, available: 1 },
		8: { name: 'table for eight', seats: 8, available: 1 },
	}

	const output = []
	const notAccepted = []

	bookings.forEach((i, index) => {
		if (seating[i] && seating[i].available) {
			output.push(seating[i].name)
			seating[i].available = seating[i].available - 1
		} else if (seating[i + 1] && seating[i + 1].available) {
			output.push(seating[i + 1].name)
			seating[i + 1].available = seating[i + 1].available - 1
		} else {
			notAccepted.push(index)
		}
	})

	return [
		output,
		notAccepted.length > 0
			? `Bookings at the following indexes were not accepted: ${notAccepted.join(
					', '
			  )}`
			: '',
	]
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

test('', () => {
	expect(reserve([2, 3, 4, 6, 8])).toStrictEqual([
		[
			'table for two',
			'table for three',
			'table for four',
			'table for six',
			'table for eight',
		],
		'',
	])
})

test('', () => {
	expect(reserve([4, 4, 10, 3, 3, 3])).toStrictEqual([
		[
			'table for four',
			'table for four',
			'table for three',
			'table for three',
		],
		'Bookings at the following indexes were not accepted: 2, 5',
	])
})
