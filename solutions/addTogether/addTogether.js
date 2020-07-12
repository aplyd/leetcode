function addTogether(...args) {
	if (args.length === 2) {
		if (typeof args[0] === 'number' && typeof args[1] === 'number') {
			return args[0] + args[1]
		} else {
			return undefined
		}
	} else {
		if (typeof args[0] === 'number') {
			return arg2 => {
				if (
					args[0] === undefined ||
					typeof arg2 !== 'number' ||
					arg2 === undefined
				) {
					return undefined
				} else {
					return args[0] + arg2
				}
			}
		}
	}
}

module.exports = addTogether
