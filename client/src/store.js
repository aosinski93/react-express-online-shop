import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// import storageSession from "redux-persist/lib/storage/session";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const persistConfig = {
//   key: "root",
//   storage: storageSession,
//   stateReconciler: hardSet
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

export default () => {
  let store = createStore(
    rootReducer,
    // persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  // let persistor = persistStore(store);

  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     const nextRootReducer = require("./reducers").default;
  //     store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  //   });
  // }

  return { store /*persistor */ };
};
