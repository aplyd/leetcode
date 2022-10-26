function countTime(time: string): number {
  let startingValue = 1
  time.split(':').forEach((h, i) => {
    if (h === '??') {
      if (i === 0) { // hours
        startingValue = 24
      } else { // minutes
        startingValue *= 60
      }
      time = time.replace('??', '00')
    }
  })

  return time.split('').reduce<number>((acc, curr, i): number => {
    if (curr === '?') {
      switch(i) {
        case 0:
          if (Number(time[1]) >= 4) {
            return acc *= 2
          } else {
            return acc *= 3
          }
        case 1:
          if (Number(time[0]) === 2)  {
            return acc *= 4
          } else {
            return acc *= 10
          }
        case 3:
          return acc *= 6
        default: 
          return acc *= 10
      }
    }

    return acc
  }, startingValue)
};

it('should pass', () => {
  expect(countTime('?5:00')).toBe(2)
})

it('', () => {
  expect(countTime('0?:0?')).toBe(100)
})

it('????', () => {
  expect(countTime('??:??')).toBe(1440)
})


it('', () => {
  expect(countTime("2?:??")).toBe(240)
})

it('', () => {
  expect(countTime("?4:22")).toBe(2)
})
