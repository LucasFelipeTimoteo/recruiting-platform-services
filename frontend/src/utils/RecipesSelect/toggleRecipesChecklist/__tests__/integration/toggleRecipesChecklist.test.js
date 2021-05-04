import alreadyChecked from "../../utils/alreadyChecked"
import limitNotReached from "../../utils/limitNotReached"
import notSelected from "../../utils/notSelected"
import checkButLimitReached from "../../utils/checkButLimitReached"

const recipeCappuccino = { id: 1, name: 'cappuccino', checked: true }
const recipeMocha = { id: 2, name: 'mocha', checked: false }
const selectedRecipe = { id: 1, name: 'cappuccino', checked: true }

describe('Test toggleRecipesChecklist util functions integration', () => {

  describe('notSelected function return true if the recipe provided by loop is diferent of selected recipe and false if is equal. It will check only selected recipe', () => {
    test('should return false to notSelected', () => {
      const expected = false
      const recipeNotSelected = notSelected(recipeCappuccino, selectedRecipe)

      expect(recipeNotSelected).toBe(expected)
    })

    test('should return true to notSelected', () => {
      const expected = true
      const recipeNotSelected = notSelected(recipeMocha, selectedRecipe)

      expect(recipeNotSelected).toBe(expected)
    })
  })

  describe('alreadyChecked function return true if the selectedrecipe is already checked. Else, return false', () => {
    test('should return true to recipeCappuccino', () => {
      const expected = true
      const recipeIsAlreadyChecked = alreadyChecked(recipeCappuccino)

      expect(recipeIsAlreadyChecked).toBe(expected)
    })

    test('should return true to recipeMocha', () => {
      const expected = false
      const recipeIsAlreadyChecked = alreadyChecked(recipeMocha)

      expect(recipeIsAlreadyChecked).toBe(expected)
    })
  })

  describe('limitReached function return true if check limit was not reached. Else, return false', () => {
    test('should return true to limitNotReached', () => {
      const expected = true

      const allowMoreRecipeChecks = true
      const recipeLimitNotReached = limitNotReached(allowMoreRecipeChecks)

      expect(recipeLimitNotReached).toBe(expected)
    })

    test('should return false to limitNotReached', () => {
      const expected = false

      const allowMoreRecipeChecks = false
      const recipeLimitNotReached = limitNotReached(allowMoreRecipeChecks)

      expect(recipeLimitNotReached).toBe(expected)
    })
  })

  describe('checkingButLimitReached return true if check limit was reached and user try to selected a new one. Else, return false', () => {
    test('should return true to checkingButLimitReached once allowMoreRecipeChecks is false and recipeMocha is not checked', () => {
      const expected = true

      const allowMoreRecipeChecks = false 
      const checkRecipeButLimitReached = checkButLimitReached(
        recipeMocha,
        allowMoreRecipeChecks
      )

      expect(checkRecipeButLimitReached).toBe(expected)
    })

    test('should return false to checkingButLimitReached once allowMoreRecipeChecks is true and recipeMocha is not checked', () => {
      const expected = false

      const allowMoreRecipeChecks = true 
      const checkRecipeButLimitReached = checkButLimitReached(
        recipeMocha,
        allowMoreRecipeChecks
      )

      expect(checkRecipeButLimitReached).toBe(expected)
    })

    test('should return false to checkingButLimitReached once allowMoreRecipeChecks is false and recipeCappuccino is checked', () => {
      const expected = false

      const allowMoreRecipeChecks = false 
      const checkRecipeButLimitReached = checkButLimitReached(
        recipeCappuccino,
        allowMoreRecipeChecks
      )

      expect(checkRecipeButLimitReached).toBe(expected)
    })
    test('should return false to checkingButLimitReached once allowMoreRecipeChecks is true and recipeCappuccino is checked', () => {
      const expected = false

      const allowMoreRecipeChecks = true 
      const checkRecipeButLimitReached = checkButLimitReached(
        recipeCappuccino,
        allowMoreRecipeChecks
      )

      expect(checkRecipeButLimitReached).toBe(expected)
    })
  })
})
