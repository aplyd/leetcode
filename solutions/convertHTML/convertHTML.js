function convertHTML(str) {
	const chars = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;',
	}
	return str
		.split('')
		.map(i => (chars.hasOwnProperty(i) ? chars[i] : i))
		.join('')
}

module.exports = convertHTML
