import { makeStyles } from "@material-ui/core";

const useRecipeThumbnailStyles = makeStyles(theme => ({
  recipeThumbnail: {
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

  smallRecipeThumbnail: {
    height: 40,
    width: 40,

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      height: 36,
      width: 36,
    }
  }
}))

export default useRecipeThumbnailStyles