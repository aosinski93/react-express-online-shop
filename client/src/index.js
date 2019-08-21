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

const {store, persistor} = storeFunc();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <CssBaseline />
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
