import React from 'react'

import CouponDisplay from '../../parts/OrderStandby/CouponDisplay'
import OrderStandbyButtons from '../../parts/OrderStandby/OrderStandbyButtons'
import SuccessTitle from '../../parts/OrderStandby/SuccessTitle'
import Timer from '../../parts/OrderStandby/Timer'
import useOrderStandbyStyles from './styles'

export default function OrderStandby() {
  const styles = useOrderStandbyStyles()

  return (
    <div className={styles.orderStandbyWrapper}>
      <SuccessTitle />
      <Timer />
      <CouponDisplay />
      <OrderStandbyButtons />
    </div>
  )
}
