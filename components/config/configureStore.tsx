import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/index';

import { routerReducer } from 'react-router-redux';

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

export default function configureStore(initialState={}) {

  const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),
    initialState,
    compose(
      applyMiddleware(thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}

