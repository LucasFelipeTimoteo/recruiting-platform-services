describe('Format the seconds to have two digits', () => {
  test('should ', () => {
    const expected = '02'

    const rawSeconds = 2
    const parsedRawSeconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds
    const seconds = String(parsedRawSeconds)

    expect(seconds).toBe(expected)
  })

  test('should ', () => {
    const expected = '23'

    const rawSeconds = 23
    const parsedRawSeconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds
    const seconds = String(parsedRawSeconds)

    expect(seconds).toBe(expected)
  })
})
