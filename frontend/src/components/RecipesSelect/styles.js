import { makeStyles } from "@material-ui/core";

const useRecipesSelectStyles = makeStyles({
  listComponentsWrapper: {
    width: '100%',
    maxWidth: 800,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    width: '100%'
  }
})

export default useRecipesSelectStyles