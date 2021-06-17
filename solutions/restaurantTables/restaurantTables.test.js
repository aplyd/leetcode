function restaurant(a, b, t) {
	const tables = {
		one: a,
		two: b,
	}

	let deniedService = 0
	let spareSeats = 0

	t.forEach(party => {
		if (party === 1) {
			if (tables.one) {
				tables.one = tables.one - 1
			} else if (tables.two) {
				tables.two = tables.two - 1
				spareSeats += 1
			} else if (spareSeats) {
				spareSeats = spareSeats - 1
			} else {
				deniedService += 1
			}
		} else {
			if (tables.two) {
				tables.two = tables.two - 1
			} else {
				deniedService += 1
			}
		}
	})

	return deniedService
}

test('', () => {
	expect(restaurant(1, 2, [1, 2, 1, 1])).toBe(0)
	expect(restaurant(1, 1, [1, 1, 2, 1])).toBe(2)
})
