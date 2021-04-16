const getEmailStorage = () => {
  let emailStorageValue = null

  const storage = localStorage.getItem('SMART_COFFEE')
  if (storage) {
    const parsedStorage = JSON.parse(storage)
    const emailStorage = parsedStorage.email
    emailStorageValue = emailStorage
  }

  return emailStorageValue
}

export default getEmailStorage