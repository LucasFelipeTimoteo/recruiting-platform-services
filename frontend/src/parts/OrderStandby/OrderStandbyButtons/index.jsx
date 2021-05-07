import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import { RotateLeft } from '@material-ui/icons'
import handleBackToHome from '../../../utils/OrderStandby/handleBackToHome'

import useOrderStandbyButtonsStyles from './styles'
import printCoupon from '../../../utils/OrderStandby/printCoupon'

export default function OrderStandbyButtons() {
  const styles = useOrderStandbyButtonsStyles()

  return (
    <div className={styles.buttonGroup}>
      <IconButton
        className={styles.returnButton}
        onClick={handleBackToHome}
        aria-label="Return to register page"
      >
        <RotateLeft />
      </IconButton>

      <Button
        color="primary"
        variant="contained"
        disableElevation
        className={styles.printCouponButton}
        onClick={printCoupon}
      >
        imprimir cupom
      </Button>
    </div>
  )
}
