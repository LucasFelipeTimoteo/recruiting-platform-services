import { useContext } from "react"
import ordersTotalTimesContext from "../../context"

const useOrdersTotalTimeContext = () => {
  const { ordersTotalTimeInSeconds, handlerdersTotalTimeInSeconds } = useContext(ordersTotalTimesContext)

  return {
    ordersTotalTimeInSeconds,
    handlerdersTotalTimeInSeconds
  }
}

export default useOrdersTotalTimeContext