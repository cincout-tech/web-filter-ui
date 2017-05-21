import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools as composeWithDevToolsProd } from 'redux-devtools-extension/logOnlyInProduction';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import baseReducer from '../reducers';

const loggerMiddleware = createLogger();

const devMode = process.env.NODE_ENV;

var composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != 'undifined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
    if (devMode === 'production') {
        composeEnhancers = composeWithDevToolsProd;
    }
}

export default function configureStore(preloadedState) {
  return createStore(baseReducer, preloadedState, composeEnhancers(
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
      )
  ));
}
