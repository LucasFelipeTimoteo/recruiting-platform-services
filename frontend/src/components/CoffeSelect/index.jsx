import React from 'react'
import RecipesSelect from '../RecipesSelect'
import ComplementsSelect from '../ComplementsSelect'
import useCoffeesPageStep from '../../hooks/coffeesPageStep/useCoffeesPageStep'
import useCoffeeSelectStyles from './styles'

export default function CoffeeSelect() {
  const {
    pageStep,
    setRecipesPageStep,
    setComplementsPageStep
  } = useCoffeesPageStep()

  const styles = useCoffeeSelectStyles()

  return (
    <div className={styles.coffeeSelectWrapper}>
      <RecipesSelect
        pageStep={pageStep}
        setComplementsPageStep={setComplementsPageStep}
      />

      <ComplementsSelect
        pageStep={pageStep}
        setRecipesPageStep={setRecipesPageStep}
      />
    </div>
  )
}