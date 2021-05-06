import parseNumberToMinutes from "../../../../GLOBAL/parseNumberToMinutes"

const getOrderTimeParts = (orderTime) => {
  const orderParsedToMinutes = parseNumberToMinutes(orderTime)
  const orderTimeSplitted = orderParsedToMinutes.split(':')
  const orderTimeSeconds = orderTimeSplitted[1]
  const orderTimeMinutes = orderTimeSplitted[0]

  const orderTimes = {seconds: orderTimeSeconds, minutes: orderTimeMinutes}

  return orderTimes
}

export default getOrderTimeParts