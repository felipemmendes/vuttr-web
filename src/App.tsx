import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store/store';
import { NotificationProvider } from './hooks/notification';

import GlobalStyles from './styles/global';
import { defaultTheme } from './styles/themes';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <NotificationProvider>
            <Routes />
          </NotificationProvider>
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
