import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Locales from './core/i18n/locales';
import messages from './core/i18n/messages';
import Shell from './shared/components/shell/shell';
import theme from './core/theme/theme';

const App = () => {
  const currentLocale = Locales.EN_US;

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={currentLocale}
        messages={messages[currentLocale]}
        defaultLocale={currentLocale}
      >
        <BrowserRouter>
          <Shell />
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
