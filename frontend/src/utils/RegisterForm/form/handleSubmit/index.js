import api from "../../../../services/api"

const handleSubmit = async (fullName, email, event ) => {
  event.preventDefault()
  try {
    const requestData = { fullName, email }
    const response = await api.post('/users', requestData)
    console.log(response.data)
    window.location="/coffees"
  }
  catch (error) {
    console.log(error)
  }
}

export default handleSubmit