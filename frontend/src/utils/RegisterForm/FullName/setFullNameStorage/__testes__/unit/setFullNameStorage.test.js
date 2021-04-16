describe('Setting full name data on localStorage', () => {
  test('should set fullName to localStorage. Success if storage is not null', () => {
    const fullName = { fullName: 'John Doe' }
    localStorage.setItem('SMART_COFFEE', JSON.stringify(fullName))

    const storage = localStorage.getItem('SMART_COFFEE')

    expect(storage).toBeTruthy()
  })
})
