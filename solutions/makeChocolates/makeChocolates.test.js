// https://www.codewars.com/kata/5f5daf1a209a64001183af9b/train/javascript

// return number of small chocolates needed to reach the goal
function makeChocolates(small, big, goal) {
	const count = {
		current: 0,
		ofSmallChocsUsed: 0,
	}

	// use as many big chocolates as possible
	for (let i = 0; i < big; i++) {
		if (count.current + 5 <= goal) {
			big -= 1
			count.current += 5
		}
	}

	// check if divisble by 2 and if so,
	if (count.current % 2 === 0) {
		count.ofSmallChocsUsed = goal - count.current / 2
		console.log(count.ofSmallChocsUsed)
    }
    
    // TODO - check if total can't be reached using big chocs and instead switch to small
    // if (current !== goal) {
        // take away 5 from current
        // try with small
    } 
    //

	// return count.ofSmallChocsUsed
}

test('', () => {
	expect(makeChocolates(4, 2, 4)).toBe(4)
	// expect(makeChocolates(4, 1, 14)).toBe(-1)
	// expect(makeChocolates(2, 1, 7)).toBe(1)
	// expect(makeChocolates(3, 1, 6)).toBe(3)
})
