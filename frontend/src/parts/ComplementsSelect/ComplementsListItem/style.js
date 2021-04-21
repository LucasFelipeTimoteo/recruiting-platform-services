import { makeStyles } from "@material-ui/core";

const useComplemetsListItem = makeStyles(theme => ({
  listItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',
    padding:  0,
    marginLeft: 50,

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: '96vw'
    }
  }
}))

export default useComplemetsListItem