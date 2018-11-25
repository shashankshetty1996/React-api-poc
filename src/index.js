import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  Provider
} from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";

import {
  BrowserRouter
} from "react-router-dom";
import createSagaMiddleware from "redux-saga";

import RootSaga from './rootSaga';
import RootReducer from './rootReducer';

const composeEnhancers =
  process.env.NODE_ENV === "development" ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(function* () {
  yield RootSaga();
});

ReactDOM.render( 
  <Provider store = {store}>
    <BrowserRouter>
      <App / >
    </BrowserRouter>
  </Provider > ,
  document.getElementById("root")
);