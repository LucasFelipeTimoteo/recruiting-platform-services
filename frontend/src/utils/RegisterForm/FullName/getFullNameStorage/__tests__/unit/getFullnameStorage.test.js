beforeAll(() => {
  const userData = { fullName: 'John Doe'}
  localStorage.setItem('SMART_COFFEE', JSON.stringify(userData))
})

describe('Getting localStorage value to userName', () => {
  test('should get and parse localStorage data to obtain correct user fullName', () => {
    const storage = localStorage.getItem('SMART_COFFEE')
    const storageParsed = JSON.parse(storage)
    const expectedValue = "John Doe"

    expect(storageParsed.fullName).toBe(expectedValue)
  })
})
