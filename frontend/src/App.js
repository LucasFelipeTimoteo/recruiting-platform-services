import Routes from './Routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import MuiTheme from './themes/MuiThemes/MuiTheme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div className="App">
        <CssBaseline />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;