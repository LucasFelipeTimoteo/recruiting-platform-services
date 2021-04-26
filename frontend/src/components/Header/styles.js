import { makeStyles } from "@material-ui/core";

const useHeaderStyles = makeStyles({
  header: {
    background: 'none',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 0',
    borderBottom: '2px solid lightgray',
  },

  titleAndSubtitleGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
})

export default useHeaderStyles