import React from 'react'
import ordersTotalTimesContext from '../context'
import useOrdersTotalTimeInSeconds from '../hooks/useOrdersTotalTimeInSeconds'

export default function OrdersTotalTimeProvider({ children }) {
  const {
    ordersTotalTimeInSeconds,
    handlerdersTotalTimeInSeconds
  } = useOrdersTotalTimeInSeconds()

  const providerValues = { ordersTotalTimeInSeconds, handlerdersTotalTimeInSeconds }

  return (
    <ordersTotalTimesContext.Provider value={providerValues}>
      {children}
    </ordersTotalTimesContext.Provider>
  )
}
