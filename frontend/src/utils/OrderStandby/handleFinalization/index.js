import estimatedOrderTime from "../../ComplementsSelect/estimatedOrderTime"
import selectedingredients from "../../ComplementsSelect/selectedingredients"

const handleOrderfinalization = async (selectedRecipesList) => {
  const orders = selectedingredients(selectedRecipesList)
  const orderTime = estimatedOrderTime(orders)

  console.log(orderTime)
  window.location = '/standby'
}

export default handleOrderfinalization