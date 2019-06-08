import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import storeFunc from "./store";

const { store /* persistor */ } = storeFunc();

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
