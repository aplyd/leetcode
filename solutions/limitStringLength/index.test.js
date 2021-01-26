//https://www.codewars.com/kata/5208fc3cb613bc725f000142/train/javascript

function solution(string, limit) {
	if (string.length <= limit) {
		return string
	}

	return string.slice(0, limit) + '...'
}

test('', () => {
	expect(solution('Testing String', 3)).toBe('Tes...')
	expect(solution('Testing String', 8)).toBe('Testing ...')
	expect(solution('Test', 8)).toBe('Test')
})
