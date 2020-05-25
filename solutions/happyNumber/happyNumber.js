// const isHappy = n => {
// 	let happy
// 	const square = num => num * num
// 	const arr = n.toString().split('')

// 	const loopCheck = digits => {
// 		let newVal = 0
// 		for (let x of digits) {
// 			newVal += square(Number(x))
// 		}
// 		if (newVal === 1) {
// 			happy = true
// 		} else {
// 			if (newVal.length > 1) {
// 				loopCheck(newVal.toString().split(''))
// 			} else {
// 				happy = square(Number(newVal[0])) === 1 ? true : false
// 			}
// 		}
// 	}

// 	if (arr.length > 1) {
// 		loopCheck(arr)
// 	} else {
// 		happy = square(Number(arr[0])) === 1 ? true : false

//         return happy
//     }
// }

//infinite loooooooooooooooopppp
const isHappy = n => {
	let happy
	const square = num => num * num

	while (true) {
		if (n === 1) {
			happy = true
			break
		}
		if (n.length < 2) {
			happy = square(Number(arr[0])) === 1 ? true : false
		} else {
			for (let x of n.toString().split('')) {
				happy += square(Number(x))
			}
		}
	}

	return happy || happy === 1 ? true : false
}

module.exports = isHappy
