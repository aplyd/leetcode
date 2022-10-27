const countOdd = (low, high) => {
  const x = (high - low) / 2
  return low % 2 === 0 && high % 2 === 0 ? x : Math.floor(x + 1)
}

it('both odd', () => {
  expect(countOdd(3, 7)).toBe(3)
})

it('both even', () => {
  expect(countOdd(2, 8)).toBe(3)
})

it('even/odd', () => {
  expect(countOdd(1, 10)).toBe(5)
})
