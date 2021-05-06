import { makeStyles } from "@material-ui/core";

const useTitleStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      letterSpacing: 0,
    }
  }
}))

export default useTitleStyles