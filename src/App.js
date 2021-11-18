import { Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { MainRoute } from './adapter/routes/Main.route';
import { initializeStore } from './adapter/state/store';

const store = initializeStore();

function App() {
  const history = createBrowserHistory();
  const theme = createTheme({
    palette: {
      action: {
        disabled: 'inherit',
        disabledBackground: '#5032a9',
      },
      primary: {
        main: '#5032a9',
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <MainRoute />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
