import React, { useState } from 'react'
import ordersTotalTimesContext from '../context'
import getOrderTimeStorage from '../../../utils/GLOBAL/getOrderTimeStorage'
import setOrderTimeStorage from '../../../utils/GLOBAL/setOrderTimeStorage'


export default function OrdersTotalTimeProvider({ children }) {
  const initialValue = getOrderTimeStorage() || 0
  const [orderTime, setOrderTime] = useState(initialValue)

  const handleOrderTime = (ingredientsTotalTimeInSeconds) => {
    if (Number.isInteger(ingredientsTotalTimeInSeconds)) {
      setOrderTimeStorage(ingredientsTotalTimeInSeconds)

      setOrderTime(ingredientsTotalTimeInSeconds)
    }
  }

  const providerValues = { orderTime, handleOrderTime }

  return (
    <ordersTotalTimesContext.Provider value={providerValues}>
      {children}
    </ordersTotalTimesContext.Provider>
  )
}
