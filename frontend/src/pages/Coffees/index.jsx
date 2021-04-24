import React from 'react'
import IngredientsChecklistProvider from '../../contexts/IngredientsChecklist/provider'
import CoffeeSelect from '../../components/CoffeSelect'
import Header from '../../components/Header'

export default function Coffees() {
  return (
    <>
      <Header />
      <IngredientsChecklistProvider>
        <CoffeeSelect />
      </IngredientsChecklistProvider>
    </>
  )
}