import api from "../../../../services/api"

const handleSubmit = async ({
  handleUser,
  fullName,
  email,
  event
}) => {
  event.preventDefault()
  
  try {
    const requestData = { fullName, email }
    const response = await api.post('/users', requestData)
    const savedUserData = response.data

    handleUser(savedUserData)

    window.location = "/coffees"
  }
  catch (error) {
    console.log(error)
  }
}

export default handleSubmit