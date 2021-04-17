import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import useContinueButtonStyles from './styles'

export default function ContinueButton() {
  const styles = useContinueButtonStyles()

  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      disableElevation={true}
      className={styles.button}
    >
      <Link to="complements" className={styles.buttonLink}>
        Continuar
      </Link>
    </Button>
  )
}
