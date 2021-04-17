import { makeStyles } from "@material-ui/core";

const useContinueButtonStyles = makeStyles(theme => ({
  buttonLink: {
    textDecoration: 'none',
    width: '100%',
  },

  button: {
    fontWeight: 400,
    padding: '12px 41px',
    maxWidth: 600,
    borderRadius: 0,
    width: '100%',
    marginTop: 'auto',

    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      marginBottom: 10
    }
  }
}))

export default useContinueButtonStyles