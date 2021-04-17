import { makeStyles } from "@material-ui/core";

const useRecipesSelectStyles = makeStyles({
  ListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    width: '100vw',
    padding: 0,
    margin: '6px 0 10px 0',
  },

  recipeInfoGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  recipe: {
    gridArea: 'recipe'
  }
})

export default useRecipesSelectStyles