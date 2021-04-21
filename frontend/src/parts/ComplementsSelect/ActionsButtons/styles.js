import { makeStyles } from "@material-ui/core";

const useActionsButtonsStyles = makeStyles({
  buttonGroup: {
    marginTop: 'auto',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50vw)',
  },

  buttonsbaseStyle: {
    border: 'none',
    fontWeight: 400,
    padding: '12px 41px',
    borderRadius: 0,
    color: 'white',
  },

  returnButtonColor: {
    background: '#f44336',
    '&:hover': {
      background: '#f44336'
    }
  },

  finalizationButtonColor: {
    background: '#2ee897e7',
    '&:hover': {
      background: '#2ee897e7'
    }
  }
})

export default useActionsButtonsStyles