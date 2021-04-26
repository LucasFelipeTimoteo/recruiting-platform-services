import { makeStyles } from "@material-ui/core";

const useComplementsSelectButtonsStyles = makeStyles(theme => ({
  buttonsGroup: {
    marginTop: 'auto',
    width: '100%',
    display: 'flex',
    marginBottom: 10,

    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: '100vw',
      marginBottom: 0
    }
  },

  buttonsbaseStyle: {
    border: 'none',
    fontWeight: 400,
    padding: '12px 41px',
    borderRadius: 0,
    color: 'white',
  },

  returnButton: {
    width: '50%',
    background: '#f44336',
    '&:hover': {
      background: '#f44336'
    }
  },

  finalizationButton: {
    width: '50%',
    background: '#2ee897e7',
    '&:hover': {
      background: '#2ee897e7'
    }
  }
}))

export default useComplementsSelectButtonsStyles