var twoSum = function (nums, target) {
	let indices = []
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i !== j && nums[i] + nums[j] === target) {
				indices = [j, i]
			}
		}
	}

	return indices
}

module.exports = twoSum
