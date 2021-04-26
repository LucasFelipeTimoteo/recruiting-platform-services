import { makeStyles } from "@material-ui/core";

const useContinueButtonStyles = makeStyles(theme => ({
  recipesSelectButton: {
    padding: '12px 41px',
    maxWidth: theme.breakpoints.values.md,
    borderRadius: 0,
    width: '100%',
    marginTop: 'auto',
    marginBottom: 10,

    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: '100vw',
      marginBottom: 0
    }
  }
}))

export default useContinueButtonStyles