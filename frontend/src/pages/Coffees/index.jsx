import React, { lazy } from 'react'
import Header from '../../components/Header'
import { Suspense } from 'react'

const CoffeeSelect = lazy(() => import('../../components/CoffeSelect'))
const IngredientsChecklistProvider = lazy(() => (
  import('../../contexts/IngredientsChecklist/provider')
))

export default function Coffees() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <IngredientsChecklistProvider>
          <CoffeeSelect />
        </IngredientsChecklistProvider>
      </Suspense>
    </>
  )
}