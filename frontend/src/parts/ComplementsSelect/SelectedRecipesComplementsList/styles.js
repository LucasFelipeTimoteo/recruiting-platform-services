import { makeStyles } from "@material-ui/core";

const useComplementsListStyles = makeStyles({
  selectedRecipesComplementsListWrapper: {
    width: '100%'
  },

  selectedRecipesComplementsList: {
    padding: 0,
    margin: '0 0 15px 0',

    "&:not(:last-child)": {
      borderBottom: '2px solid lightGray'
    }
  },

  selectedRecipesComplementsListItem: {
    listStyle: 'none',
  },

  selectedRecipeInfo: {
    display: 'flex',
    alignItems: 'center'
  }
})

export default useComplementsListStyles