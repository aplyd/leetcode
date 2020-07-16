function register(price, cash, cid) {
	const COINS_AND_BILLS = {
		8: { name: 'PENNY', value: 0.01 },
		7: { name: 'NICKEL', value: 0.05 },
		6: { name: 'DIME', value: 0.1 },
		5: { name: 'QUARTER', value: 0.25 },
		4: { name: 'ONE', value: 1 },
		3: { name: 'FIVE', value: 5 },
		2: { name: 'TEN', value: 10 },
		1: { name: 'TWENTY', value: 20 },
		0: { name: 'ONE_HUNDRED', value: 100 },
	}

	let changeDue = cash - price

	// get current cash in drawer total
	const cidTotal = cid.reduce((acc, curr) => {
		return (acc += curr[1])
	}, 0)

	const remainingChange = cid.reverse().reduce(
		({ arr, change }, curr, index) => {
			let newValue = 0

			if (COINS_AND_BILLS[index].value <= change) {
				while (
					curr[1] - COINS_AND_BILLS[index].value > 0 &&
					change > 0
				) {
					change -= COINS_AND_BILLS[index].value
					newValue += COINS_AND_BILLS[index].value
					// console.log({ change })

					// to stop infinite loop, check if remaining change due is less than current coin/bill
					if (change < COINS_AND_BILLS[index].value) {
						break
					}
				}
				arr.push([curr[0], newValue])
			}

			return { arr, change }
		},
		{ arr: [], change: changeDue }
	)

	if (changeDue > cidTotal || remainingChange.change > 0) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] }
	} else if (cidTotal === remainingChange.change) {
		return { status: 'CLOSED', change: cid }
	} else {
		return { status: 'OPEN', change: remainingChange.arr.reverse() }
	}
}

module.exports = register
