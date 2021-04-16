import React from 'react'
import { Button } from '@material-ui/core'

import useRegisterButton from './styles'
import { Link } from 'react-router-dom'


export default function RegisterButton() {
  const styles = useRegisterButton()

  return (
    <>
      <Link to="recipes" className={styles.buttonLink}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          disableElevation={true}
          className={styles.button}
        >
          cadastrar
      </Button>
      </Link>
    </>
  )
}