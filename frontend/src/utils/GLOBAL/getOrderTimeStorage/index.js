const getOrderTimeStorage = () => {
  let orderStorageValue = null

  const storage = localStorage.getItem('SMART_COFFEE')
  if (storage) {
    const parsedStorage = JSON.parse(storage)
    const orderTimeStorage = parsedStorage.orderTime
    orderStorageValue = orderTimeStorage
  }

  return orderStorageValue
}

export default getOrderTimeStorage