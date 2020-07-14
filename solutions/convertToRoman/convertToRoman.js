// this is the scariest code i've written but it works
// will probably refactor never
function convertToRoman(num) {
	const symbols = {
		1: 'I',
		5: 'V',
		10: 'X',
		50: 'L',
		100: 'C',
		500: 'D',
		1000: 'M',
	}

	const numAsArr = num.toString().split('')
	const romanArr = []

	const createCombination = (num, place) => {
		const romanSymbols = Object.values(symbols)
		const firstSym = romanSymbols[place * 2]
		const secondSym = romanSymbols[place * 2 + 1]
		const thirdSym = romanSymbols[place * 2 + 2]

		const newSyms = []
		// const firstNum = num.split('')[0]
		if (num > 0 && num < 4) {
			for (let i = 0; i < num; i++) {
				newSyms.push(firstSym)
			}
		} else if (num === 4) {
			newSyms.push(firstSym)
			newSyms.push(secondSym)
		} else if (num === 5) {
			newSyms.push(secondSym)
		} else if (num > 5 && num < 9) {
			newSyms.push(secondSym)
			for (let i = 0; i < num - 5; i++) {
				newSyms.push(firstSym)
			}
		} else if (num === 9) {
			newSyms.push(firstSym)
			newSyms.push(thirdSym)
		}
		// console.log(newSyms.join(''))
		return newSyms.join('')
	}

	// console.log(createCombination(2, 0))
	for (let i = 0; i < numAsArr.length; i++) {
		let digit
		if (numAsArr.length === 1) {
			digit = createCombination(Number(numAsArr[i]), i)
		} else if (numAsArr.length === 2) {
			digit = createCombination(Number(numAsArr[i]), i * -1 + 1)
		} else if (numAsArr.length === 3) {
			digit = createCombination(Number(numAsArr[i]), i * -1 + 2)
		} else if (numAsArr.length === 4) {
			digit = createCombination(Number(numAsArr[i]), i * -1 + 3)
		}

		romanArr.push(digit)
	}

	return romanArr.join('')
}

module.exports = convertToRoman
