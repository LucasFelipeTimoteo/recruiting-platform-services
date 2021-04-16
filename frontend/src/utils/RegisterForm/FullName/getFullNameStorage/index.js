const getFullNameStorage = () => {
  let fullNameStorageValue = null

  const storage = localStorage.getItem('SMART_COFFEE')
  if (storage) {
    const parsedStorage = JSON.parse(storage)
    const fullNameStorage = parsedStorage.fullName
    fullNameStorageValue = fullNameStorage
  }

  return fullNameStorageValue
}

export default getFullNameStorage