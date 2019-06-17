import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";

import {AppContainer} from "./components/AppContainer";
import {counterReducer} from './ducks/reducer';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  counterReducer,
  reduxDevTools
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);