function sumPrimes(num) {
	const isPrime = currentNum => {
		let val = true
		for (let i = currentNum; i > 0; i--) {
			if (i !== currentNum && currentNum % i === 0 && i !== 1) {
				val = false
				break
			}
		}
		return val
	}

	const primes = []
	for (let i = num; i > 0; i--) {
		isPrime(i) && primes.push(i)
	}

	return primes.reduce((acc, curr) => {
		if (curr !== 1) {
			acc += curr
		}
		return acc
	}, 0)
}

module.exports = sumPrimes
