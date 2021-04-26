import { makeStyles } from "@material-ui/core";

const useIngredientLogoStyles = makeStyles(theme => ({
  logo: {
    height: 63,
    width: 63,
    margin: '0 10px 0 40px ',
    userSelect: 'none',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: 58,
      height: 58,
      margin: '0 10px 0 15px ',
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

export default useIngredientLogoStyles