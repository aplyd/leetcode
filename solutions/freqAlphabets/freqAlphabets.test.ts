const freqAlphabets = (s) => {
  const getChar = (strNum) => String.fromCharCode(Number(strNum) + 64).toLowerCase()
  return s.split('#').reverse().reduce((acc, curr, i) => {

    if (curr.length > 2 || i !== 0) {
      acc.push(getChar(curr.slice(-2)))
      curr.slice(0, -2).split('').reverse().forEach(c => {
        acc.push(getChar(c))
      })
    } else {
      curr.split('').reverse().forEach((p) => acc.push(getChar(p)))
    }

    return acc
  }, []).reverse().join('')
}

it('should pass', () => {
  const s = "10#11#12"
  expect(freqAlphabets(s)).toBe('jkab')
})

it('should pass too', () => {
  const s = "1326#"
  expect(freqAlphabets(s)).toBe('acz')
})
