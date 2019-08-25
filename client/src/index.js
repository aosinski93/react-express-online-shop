import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import storeFunc from "./store";
import AppContainer from "./containers/App.container";
import Loader from "./components/commonComponents/Loader/Loader";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import ErrorBoundary from "./components/commonComponents/ErrorBoundary/ErrorBoundary";

const {store, persistor} = storeFunc();

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#607a9f',
        accent: '#92aec0'
      },
      secondary: {
        main: '#9f8560'
      }
    },
    typography: {
      fontFamily: [
        'Bourton',
        'Ubuntu',
      ].join(','),
    },
  },
);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppContainer />
        </MuiThemeProvider>
      </PersistGate>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
