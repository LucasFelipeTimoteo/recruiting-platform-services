import estimatedOrderTime from "../../ComplementsSelect/estimatedOrderTime"
import getSelectedIngredients from "../getSelectedIngredients"
import getRequestData from './utils/getRequestData'
import api from '../../../services/api'

const handleOrderfinalization = async ({
  selectedRecipesList,
  handlerdersTotalTimeInSeconds,
  user
}) => {
  const orders = getSelectedIngredients(selectedRecipesList)

  const {
    ingredientsTotalTime,
    ingredientsTotalTimeInSeconds
  } = estimatedOrderTime(orders)

  const requestData = getRequestData(orders, user, ingredientsTotalTime)

  try {
    await api.post('/orders', requestData)
    handlerdersTotalTimeInSeconds(ingredientsTotalTimeInSeconds)

    window.location = '/standby'
  } 
  catch (error) {
    console.log(error)
  }
}

export default handleOrderfinalization