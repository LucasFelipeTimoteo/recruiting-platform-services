import { useContext } from "react"
import ordersTotalTimesContext from "../../context"

const useOrdersTotalTimeContext = () => {
  const { orderTime, handleOrderTime } = useContext(ordersTotalTimesContext)

  return {
    orderTime,
    handleOrderTime
  }
}

export default useOrdersTotalTimeContext