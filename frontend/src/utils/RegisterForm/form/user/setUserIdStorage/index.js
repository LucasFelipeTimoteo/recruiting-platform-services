const setUserIdStorage = (userId) => {
  const storage = localStorage.getItem('SMART_COFFEE')
  const parsedStorage = JSON.parse(storage)
  const newStorage = JSON.stringify({ ...parsedStorage, userId: userId })

  localStorage.setItem('SMART_COFFEE', newStorage)
}

export default setUserIdStorage