import { makeStyles } from "@material-ui/core";

const useRecipeLogoStyles = makeStyles(theme => ({
  logo: {
    height: 63,
    width: 63,
    margin: '0 10px',
    userSelect: 'none',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: 58,
      height: 58,
      margin: '0, 5px',
      position: 'relative',
      left: '-5px'
    }
  },

  bigLogo: {
    alignSelf: 'center',
    margin: 30,
    width: 138,
    height: 139,
    userSelect: 'none',
  }
}))

export default useRecipeLogoStyles