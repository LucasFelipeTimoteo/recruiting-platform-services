import { useState } from 'react'
import getUserIdStorage from '../../../../utils/RegisterForm/form/user/getUserIdStorage'
import setUserIdStorage from '../../../../utils/RegisterForm/form/user/setUserIdStorage'

export default function useUserRegister() {
  const userIdStorage = getUserIdStorage()
  const [user, setUser] = useState(userIdStorage || {})

  const handleUser = (savedUserId) => {
    setUserIdStorage(savedUserId)

    setUser(savedUserId)
  }

  return {
    user,
    handleUser
  }
}
