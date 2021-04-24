import { makeStyles } from "@material-ui/core";

const useHeaderStyles = makeStyles(theme => ({
  header: {
    background: 'none',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerContent: {
    display: 'flex',
    justifyContent: 'flex-start',

    width: '90vw',
    padding: '10px 0',
    border: '10px solid transparent',
    borderBottom: '2px solid lightgray',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: '96vw'
    }
  },

  titleAndSubtitleGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
}))

export default useHeaderStyles