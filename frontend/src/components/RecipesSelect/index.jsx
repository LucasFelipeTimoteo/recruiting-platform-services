import React from 'react'

import CheckboxImage from '../../parts/GLOBAL/CheckboxImage'
import IngredientThumbnail from '../../parts/GLOBAL/IngredientThumbnail'
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
    <div className={styles.listComponentsWrapper}>
      <ul className={styles.list}>
        {
          ingredientsChecklist.map(recipe => (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
            >
              <IngredientThumbnail ingredient={recipe} />
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
    </div>
  )
}
