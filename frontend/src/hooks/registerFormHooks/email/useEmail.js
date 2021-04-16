import { useState } from 'react'

import getEmailStorage from '../../../utils/RegisterForm/Email/getEmailStorage'
import setEmailStorage from '../../../utils/RegisterForm/Email/setEmailStorage'

export default function useEmail() {
  const initialValue = getEmailStorage() || ''
  const [email, setEmail] = useState(initialValue)

  const handleEmail = (e) => {
    const inputValue = e.target.value
    setEmailStorage(inputValue)

    setEmail(inputValue)
  }

  return {
    email,
    handleEmail
  }
}
