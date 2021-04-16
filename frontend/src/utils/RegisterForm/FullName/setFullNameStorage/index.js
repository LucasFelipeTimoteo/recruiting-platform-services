const setEmailStorage = (inputValue) => {
  const storage = localStorage.getItem('SMART_COFFEE')
  const parsedStorage = JSON.parse(storage)
  const newStorage = JSON.stringify({ ...parsedStorage, fullName: inputValue })

  localStorage.setItem('SMART_COFFEE', newStorage)
}

export default setEmailStorage