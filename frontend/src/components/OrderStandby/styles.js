import { makeStyles } from "@material-ui/core";

const useOrderStandbyStyles = makeStyles(theme => ({
  orderStandbyWrapper: {
    width: `min(100%, ${theme.breakpoints.values.md}px)`,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default useOrderStandbyStyles