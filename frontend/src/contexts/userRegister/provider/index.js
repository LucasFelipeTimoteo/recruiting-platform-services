import React from 'react'
import userRegisterContext from '../context'
import useUserRegister from '../hooks/useUserRegister'

export default function UserRegisterProvider({ children }) {
  const {user, handleUser} = useUserRegister()

  const providerValues = { user, handleUser }

  return (
    <userRegisterContext.Provider value={providerValues}>
      {children}
    </userRegisterContext.Provider>
  )
}
