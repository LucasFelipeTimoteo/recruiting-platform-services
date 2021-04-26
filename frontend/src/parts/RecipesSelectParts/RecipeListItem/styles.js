import { makeStyles } from "@material-ui/core";

const useListItemStyles = makeStyles({
  recipeListItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',
    padding: '12px 0',
    borderBottom: '2px solid lightgray'
  }
})

export default useListItemStyles