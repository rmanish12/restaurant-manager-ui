import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Locales from './core/i18n/locales';
import messages from './core/i18n/messages';
import Shell from './shared/components/shell/shell';
import theme from './core/theme/theme';
import { store } from './store/store';
import { LoaderProvider } from './shared/context/loader-context';
import { ToastContainer } from './shared/components/toast-container/toast-container';

const App = () => {
  const currentLocale = Locales.EN_US;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IntlProvider
          locale={currentLocale}
          messages={messages[currentLocale]}
          defaultLocale={currentLocale}
        >
          <BrowserRouter>
            <LoaderProvider>
              <>
                <Shell />
                <ToastContainer />
              </>
            </LoaderProvider>
          </BrowserRouter>
        </IntlProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
