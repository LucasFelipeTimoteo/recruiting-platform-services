beforeAll(() => {
  const userData = { email: 'test@testmail.com'}
  localStorage.setItem('SMART_COFFEE', JSON.stringify(userData))
})

describe('Getting localStorage value to email', () => {
  test('should get and parse localStorage data to obtain correct user email', () => {
    const storage = localStorage.getItem('SMART_COFFEE')
    const storageParsed = JSON.parse(storage)
    const expectedValue = "test@testmail.com"

    expect(storageParsed.email).toBe(expectedValue)
  })
})
