import React from 'react'
import RecipesSelect from '../RecipesSelect'
import ComplementsSelect from '../ComplementsSelect'
import useCoffeesPageStep from '../../hooks/coffeesPageStep/useCoffeesPageStep'

export default function CoffeeSelect() {
  const {
    pageStep,
    setRecipesPageStep,
    setComplementsPageStep
  } = useCoffeesPageStep()

  return (
    <>
      <RecipesSelect
        pageStep={pageStep}
        setComplementsPageStep={setComplementsPageStep}
      />

      <ComplementsSelect
        pageStep={pageStep}
        setRecipesPageStep={setRecipesPageStep}
      />
    </>
  )
}