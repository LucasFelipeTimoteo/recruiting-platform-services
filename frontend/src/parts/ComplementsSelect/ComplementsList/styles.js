import { makeStyles } from "@material-ui/core";

const useComplementsListStyles = makeStyles(theme => ({
  complementsListWrapper: {
    padding: 0,
    margin: '12px 25px',

    [theme.breakpoints.down(320)]: {
      margin: '12px 0',
    }
  },

  complementInfoGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
}))

export default useComplementsListStyles