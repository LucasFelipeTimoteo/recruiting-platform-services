import { useState } from 'react'
import getOrderTimeStorage from '../../../../utils/GLOBAL/getOrderTimeStorage'
import setOrderTimeStorage from '../../../../utils/GLOBAL/setOrderTimeStorage'

export default function useOrdersTotalTimeInSeconds() {
  const initialValue = getOrderTimeStorage() || 0
  const [ordersTotalTimeInSeconds, setOrderTime] = useState(initialValue)

  const handleOrderTime = (ingredientsTotalTimeInSeconds) => {
    if (Number.isInteger(ingredientsTotalTimeInSeconds)) {
      setOrderTimeStorage(ingredientsTotalTimeInSeconds)

      setOrderTime(ingredientsTotalTimeInSeconds)
    }
  }

  return {
    ordersTotalTimeInSeconds, 
    handleOrderTime
  }
}
