import { makeStyles } from "@material-ui/core";

const useComplementsListStyles = makeStyles(theme => ({
  listWrapper: {
    padding: 0,
    margin: 0
  },

  recipeInfo: {
    display: 'flex',
    alignItems: 'center'
  },

  recipeAndComplementsListItem: {
    listStyle: 'none',
    boxSizing:'border-box',
    width: '90vw',
    border: '10px solid transparent',
    borderBottom: '2px solid lightgray',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: '96vw'
    }
  }
}))

export default useComplementsListStyles