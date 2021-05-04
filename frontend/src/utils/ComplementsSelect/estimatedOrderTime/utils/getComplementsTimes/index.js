import complementsTimesList from "./utils/complementsTimesList"
import complementsTimes from "./utils/complementsTimes"

const getComplementsTimes = (orders) => {
  const orderComplementsTimesList = complementsTimesList(orders)
  const orderComplementsTimes = complementsTimes(orderComplementsTimesList)

  return orderComplementsTimes
}

export default getComplementsTimes