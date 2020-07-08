const spinalTapCase = require('./spinalTapCase')

test('spaces', () => {
	const result = spinalTapCase('This Is Spinal Tap')
	expect(result).toEqual('this-is-spinal-tap')
})

test('camel case', () => {
	const result = spinalTapCase('thisIsSpinalTap')
	expect(result).toEqual('this-is-spinal-tap')
})

test('underscore', () => {
	const result = spinalTapCase('The_Andy_Griffith_Show')
	expect(result).toEqual('the-andy-griffith-show')
})

test('stupid dash in middle of word', () => {
	const result = spinalTapCase('Teletubbies say Eh-oh')
	expect(result).toEqual('teletubbies-say-eh-oh')
})
test('underscore', () => {
	const result = spinalTapCase('AllThe-small Things')
	console.log(result)
	expect(result).toEqual('all-the-small-things')
})
