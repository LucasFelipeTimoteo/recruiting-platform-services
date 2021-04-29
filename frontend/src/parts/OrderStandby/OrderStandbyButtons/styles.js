import { makeStyles } from "@material-ui/core";

const useOrderStandbyButtonsStyles = makeStyles({
  buttonGroup: {
    width: '100%',
    height: 55,
    display: 'flex',
    margin: 'auto 0 20px 0'
  },

  returnButton: {
    width: 70,
    borderRadius: 0,
    background: 'lightgray'
  },

  printCouponButton: {
    borderRadius: 0,
    width: '100%',
    marginLeft: 10
  }
})

export default useOrderStandbyButtonsStyles