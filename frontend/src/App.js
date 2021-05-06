import Routes from './Routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import MuiTheme from './themes/MuiThemes/MuiTheme';
import './App.css';
import OrdersTotalTimeProvider from './contexts/ordersTotalTimes/provider';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <OrdersTotalTimeProvider>
        <div className="App">
          <CssBaseline />
          <Routes />
        </div>
      </OrdersTotalTimeProvider>
    </ThemeProvider>
  );
}

export default App;