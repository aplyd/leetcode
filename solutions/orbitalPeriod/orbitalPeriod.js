function orbitalPeriod(arr) {
	const GM = 398600.4418
	const earthRadius = 6367.4447
	const a = 2 * Math.PI

	// looked up the formula because i'm a programmer, not a physicist
	return arr.map(obj => {
		if (obj.hasOwnProperty('avgAlt')) {
			const c = Math.pow(earthRadius + obj.avgAlt, 3)
			const b = Math.sqrt(c / GM)
			obj.orbitalPeriod = Math.round(a * b)
			delete obj.avgAlt
		}
		return obj
	})
}

module.exports = orbitalPeriod
