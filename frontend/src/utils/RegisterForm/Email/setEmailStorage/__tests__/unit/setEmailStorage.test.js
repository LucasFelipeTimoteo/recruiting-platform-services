describe('Setting E-mail data on localStorage', () => {
  test('should set email to localStorage. Success if storage is not null', () => {
    const email = { email: 'test@testmail.com' }
    localStorage.setItem('SMART_COFFEE', JSON.stringify(email))

    const storage = localStorage.getItem('SMART_COFFEE')

    expect(storage).toBeTruthy()
  })
})
