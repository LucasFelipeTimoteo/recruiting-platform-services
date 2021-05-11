import { useContext } from 'react'
import userRegisterContext from '../../context'

export default function useUserRegisteristerContext() {
  const { user, handleUser } = useContext(userRegisterContext)

  return {
    user,
    handleUser
  }
}
