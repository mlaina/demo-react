import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './config/router/Routes';
import theme from './config/theme/theme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import store, { persistor } from './Store';
import i18nProvider from './config/i18n/i18nProvider';
import { PersistGate } from 'redux-persist/es/integration/react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import { setupAxios } from './api/axios/index';
import { SnackbarProvider } from 'notistack';
import Snack from './config/notifications/Snack';
import makeStyles from '@mui/styles/makeStyles';
import 'moment/locale/es';
import { es } from 'date-fns/locale';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

setupAxios(axios, store);


const useStyles = makeStyles(() => ({
  contentRoot: {
    backgroundColor: theme.palette.success.main + ' !important',
  },
  variantSuccess: {
    backgroundColor: theme.palette.success.main + ' !important',
  },
  variantError: {
    backgroundColor: theme.palette.error.main + ' !important',
  },
  variantInfo: {
    backgroundColor: theme.palette.secondary.main + ' !important',
  },
  variantWarning: {
    backgroundColor: theme.palette.warning.main + ' !important',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
      <I18nextProvider i18n={i18nProvider}>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <SnackbarProvider classes={classes} maxSnack={3}>
                <LocalizationProvider
                  adapterLocale={es}
                  dateAdapter={AdapterDateFns}
                >
                  <Router>
                    <Routes />
                  </Router>
                  <Snack />
                </LocalizationProvider>
              </SnackbarProvider>
            </ThemeProvider>
          </Provider>
        </PersistGate>
      </I18nextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
