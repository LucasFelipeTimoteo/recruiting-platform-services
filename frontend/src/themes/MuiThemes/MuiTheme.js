import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let MuiTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      }
    }
  },

  palette: {
    primary: {
      main: '#001a35f2',
      contrastText: '#fff'
    },
    background: {
      default: '#ebebeb'
    },
    text: {
      primary: '#5E4429'
    }
    
  },

  typography: {
    button: {
      letterSpacing: 3,
      fontFamily: 'Montserrat, Arial'
    },
    allVariants: {
      fontFamily: 'Montserrat, Arial',
      letterSpacing: 1
    },
    h4: {
      letterSpacing: 3
    },
    subtitle2: {
      fontSize: 12
    }
  },

  breakpoints: {
    values: {
      xs: 290,
      sm: 370,
      md: 600
    },
  }
})

MuiTheme = responsiveFontSizes(MuiTheme)

export default MuiTheme