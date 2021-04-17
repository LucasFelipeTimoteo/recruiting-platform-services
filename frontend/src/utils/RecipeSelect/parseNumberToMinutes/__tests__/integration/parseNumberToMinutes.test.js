import parseNumberToMinutes from "../.."

describe('function parseNumberToMinutes returns the correct value depending of input provided', () => {
  test('should return "0:09" to imput "9"', () => {
    const expected = '0:09'
    const input = '9'
    const result = parseNumberToMinutes(input)

    expect(expected).toBe(result)
  })

  test('should return "0:42" to imput "42"', () => {
    const expected = '0:42'
    const input = '42'
    const result = parseNumberToMinutes(input)

    expect(expected).toBe(result)
  })

  test('should return "2:37" to imput "237"', () => {
    const expected = '2:37'
    const input = '237'
    const result = parseNumberToMinutes(input)

    expect(expected).toBe(result)
  })
  
})
