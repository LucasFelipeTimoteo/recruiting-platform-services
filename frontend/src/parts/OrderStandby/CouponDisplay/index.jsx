import { Typography } from '@material-ui/core'
import React from 'react'
import useCoupon from '../../../hooks/OrderStandbyHooks/useCoupon'
import useCouponDisplayStyles from './styles'

export default function CouponDisplay() {
  const coupon = useCoupon()
  const styles = useCouponDisplayStyles()

  return (
    <div className={styles.couponContainer}>
      <Typography variant="h4" component="p">
        { coupon }
      </Typography>
    </div>
  )
}
