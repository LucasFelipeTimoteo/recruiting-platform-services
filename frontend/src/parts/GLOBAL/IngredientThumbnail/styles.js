import { makeStyles } from "@material-ui/core";

const useIngredientThumbnailStyles = makeStyles(theme => ({
  IngredientThumbnail: {
    height: 63,
    width: 63,
    margin: '0 10px 0 40px ',
    userSelect: 'none',

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: 58,
      height: 58,
      margin: '0 10px',
    }
  },

  smallIngredientThumbnail: {
    height: 40,
    width: 40,

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      height: 36,
      width: 36,
    }
  }
}))

export default useIngredientThumbnailStyles