function uniteUnique(...args) {
	return [...new Set(args.flat())]
}

module.exports = uniteUnique
