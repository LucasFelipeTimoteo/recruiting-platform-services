const getUserIdStorage = () => {
  let userIdStorageValue = null

  const storage = localStorage.getItem('SMART_COFFEE')
  if (storage) {
    const parsedStorage = JSON.parse(storage)
    const userIdStorage = parsedStorage.userId
    userIdStorageValue = userIdStorage
  }

  return userIdStorageValue
}

export default getUserIdStorage