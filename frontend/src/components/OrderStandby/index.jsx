import React from 'react'
import CouponDisplay from '../../parts/OrderStandby/CouponDisplay'
import OrderStandbyButtons from '../../parts/OrderStandby/OrderStandbyButtons'
import SuccessTitle from '../../parts/OrderStandby/SuccessTitle'
import useOrderStandbyStyles from './styles'

export default function OrderStandby() {
  const styles = useOrderStandbyStyles()

  return (
    <div className={styles.orderStandbyWrapper}>
      <SuccessTitle />
      
      <div style={{ height: 250, width: '100%', background: 'gray' }}>
        TIMER
      </div>
      
      <CouponDisplay />
      <OrderStandbyButtons />
    </div>
  )
}
