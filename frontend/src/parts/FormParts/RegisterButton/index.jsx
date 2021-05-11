import React from 'react'
import { Button } from '@material-ui/core'
import useRegisterButton from './styles'
import handleSubmit from '../../../utils/RegisterForm/form/handleSubmit'
import useUserRegisterContext from '../../../contexts/userRegister/hooks/useUserRegisterContext'

export default function RegisterButton({ fullName, email }) {
  const { handleUser } = useUserRegisterContext()
  const styles = useRegisterButton()

  return (
    <>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        disableElevation={true}
        className={styles.registerButton}
        onClick={(event) => handleSubmit({
          handleUser,
          fullName,
          email,
          event
        })}
      >
        cadastrar
      </Button>
    </>
  )
}