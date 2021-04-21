import React from 'react'
import { Button } from '@material-ui/core'
import useRegisterButton from './styles'

export default function RegisterButton() {
  const styles = useRegisterButton()

  return (
    <>
      <Button
        type="button"
        color="primary"
        variant="contained"
        size="large"
        disableElevation={true}
        className={styles.button}
      >
        cadastrar
      </Button>
    </>
  )
}