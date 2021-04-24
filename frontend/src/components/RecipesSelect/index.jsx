import React from 'react'

import CheckboxImage from '../../parts/GLOBAL/CheckboxImage'
import RecipeThumbnail from '../../parts/GLOBAL/RecipeThumbnail'
import RecipeListItem from '../../parts/RecipesSelectParts/RecipeListItem'
import ContinueButton from '../../parts/RecipesSelectParts/ContinueButton'

import useRecipesSelectStyles from './styles'
import useIngredientsChecklistContext from '../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import IngredientInfo from '../../parts/GLOBAL/IngredientInfo'

export default function RecipesSelect({
  pageStep,
  setComplementsPageStep
}) {
  const { ingredientsChecklist } = useIngredientsChecklistContext()
  const styles = useRecipesSelectStyles()

  if (pageStep !== 'recipes') {
    return null
  }
  return (
    <>
      <ul className={styles.ListWrapper}>
        {
          ingredientsChecklist.map(recipe => (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
            >
              <RecipeThumbnail recipe={recipe} />
              <IngredientInfo ingredient={recipe} />
              <CheckboxImage checked={recipe.checked} />
            </RecipeListItem>
          ))
        }
      </ul>

      <ContinueButton
        setComplementsPageStep={setComplementsPageStep}
        ingredientsChecklist={ingredientsChecklist}
      />
    </>
  )
}
