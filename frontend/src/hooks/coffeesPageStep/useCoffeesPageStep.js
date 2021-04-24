import { useState } from 'react'

export default function useCoffeesPageStep() {
  const [pageStep, setPageStep] = useState('recipes')

  const setRecipesPageStep = () => {
    setPageStep('recipes')
  }

  const setComplementsPageStep = () => {
    setPageStep('complements')
  }

  return {
    pageStep,
    setRecipesPageStep,
    setComplementsPageStep
  }
}
