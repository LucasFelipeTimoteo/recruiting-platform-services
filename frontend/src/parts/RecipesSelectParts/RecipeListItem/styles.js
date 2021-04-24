import { makeStyles } from "@material-ui/core";

const useListItemStyles = makeStyles(theme => ({
  listItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '90vw',
    padding: '7px 0',
    border: '10px solid transparent',
    borderBottom: '2px solid lightgray',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: '96vw'
    }
  },
}))

export default useListItemStyles