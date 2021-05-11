import React, { lazy } from 'react'
import { Suspense } from 'react'
import Header from '../../components/Header'

const OrderStandby = lazy(() => import('../../components/OrderStandby'))

export default function Standby() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <OrderStandby />
      </Suspense>
    </>
  )
}
