//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
//6kyu

function findUnique(arr) {
	const obj = {
		//num: quantity
	}

	arr.forEach(i => {
		if (!obj.hasOwnProperty(i)) {
			obj[i] = 1
		} else {
			obj[i] = obj[i] + 1
		}
	})

	return parseFloat(Object.entries(obj).filter(subArr => subArr[1] === 1)[0])
}

test('', () => {
	expect(findUnique([0, 1, 0])).toBe(1)
	expect(findUnique([1, 1, 1, 2, 1, 1])).toBe(2)
	expect(findUnique([3, 10, 3, 3, 3])).toBe(10)
	expect(findUnique([3, 0.55, 3, 3, 3])).toBe(0.55)
})
