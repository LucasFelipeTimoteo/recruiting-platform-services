import Routes from './Routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import MuiTheme from './themes/MuiThemes/MuiTheme';
import './App.css';
import OrdersTotalTimeProvider from './contexts/ordersTotalTimes/provider';
import UserRegistryProvider from './contexts/userRegister/provider';

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <UserRegistryProvider>
        <OrdersTotalTimeProvider>
          <div className="App">
            <CssBaseline />
            <Routes />
          </div>
        </OrdersTotalTimeProvider>
      </UserRegistryProvider>
    </ThemeProvider>
  );
}

export default App;