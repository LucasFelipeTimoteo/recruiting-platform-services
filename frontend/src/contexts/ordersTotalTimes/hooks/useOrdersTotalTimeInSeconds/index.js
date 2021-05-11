import { useState } from 'react'
import getOrderTimeStorage from '../../../../utils/GLOBAL/getOrderTimeStorage'
import setOrderTimeStorage from '../../../../utils/GLOBAL/setOrderTimeStorage'

export default function useOrdersTotalTimeInSeconds() {
  const initialValue = getOrderTimeStorage() || 0
  const [ordersTotalTimeInSeconds, setOrdersTotalTimeInSeconds] = useState(initialValue)

  const handlerdersTotalTimeInSeconds = (ingredientsTotalTimeInSeconds) => {
    if (Number.isInteger(ingredientsTotalTimeInSeconds)) {
      setOrderTimeStorage(ingredientsTotalTimeInSeconds)

      setOrdersTotalTimeInSeconds(ingredientsTotalTimeInSeconds)
    }
  }

  return {
    ordersTotalTimeInSeconds, 
    handlerdersTotalTimeInSeconds
  }
}
