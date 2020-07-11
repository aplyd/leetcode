function sumFibs(num) {
	const numsArr = []
	for (let i = 1; i <= num; ) {
		numsArr.push(i)
		i =
			numsArr.length > 1
				? numsArr[numsArr.length - 1] + numsArr[numsArr.length - 2]
				: 1
	}

	return numsArr.reduce((acc, curr) => {
		curr % 2 !== 0 ? (acc += curr) : null
		return acc
	}, 0)
}

module.exports = sumFibs
