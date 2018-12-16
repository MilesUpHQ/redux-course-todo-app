import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/todos";

const logger = store => next => action => {
  console.log(store.getState());
  console.log("will dispatch", action);
  return next(action);
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
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
