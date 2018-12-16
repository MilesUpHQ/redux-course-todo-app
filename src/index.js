import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/todos";

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};
// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.log(store.getState());
//       console.log("will dispatch", action);
//       return next(action);
//     };
//   };
// };

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger)
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
