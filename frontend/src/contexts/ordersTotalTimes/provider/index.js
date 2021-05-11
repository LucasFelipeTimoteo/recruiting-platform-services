import React from 'react'
import ordersTotalTimesContext from '../context'
import useOrdersTotalTimeInSeconds from '../hooks/useOrdersTotalTimeInSeconds'

export default function OrdersTotalTimeProvider({ children }) {
  const {
    ordersTotalTimeInSeconds,
    handleOrderTime
  } = useOrdersTotalTimeInSeconds()

  const providerValues = { ordersTotalTimeInSeconds, handleOrderTime }

  return (
    <ordersTotalTimesContext.Provider value={providerValues}>
      {children}
    </ordersTotalTimesContext.Provider>
  )
}
