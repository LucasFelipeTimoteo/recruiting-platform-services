const setOrderTimeStorage = (ingredientsTotalTimeInSeconds) => {
  const storage = localStorage.getItem('SMART_COFFEE')
  const parsedStorage = JSON.parse(storage)
  const newStorage = JSON.stringify({ ...parsedStorage, ordersTotalTimeInSeconds: ingredientsTotalTimeInSeconds })

  localStorage.setItem('SMART_COFFEE', newStorage)
}

export default setOrderTimeStorage
