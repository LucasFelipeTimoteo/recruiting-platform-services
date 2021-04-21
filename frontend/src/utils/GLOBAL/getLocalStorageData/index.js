const getLocalStorageData = () => {
  const storage = localStorage.getItem('SMART_COFFEE')
  const parsedStorage = storage ? JSON.parse(storage) : null

  return parsedStorage
}

export default getLocalStorageData