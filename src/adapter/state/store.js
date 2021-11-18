// @ts-nocheck
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { userReducer } from '../../modules/users/adapter/state/user.reducer';

const allMiddlewares = [
  thunk,
  process.env.NODE_ENV !== 'production' &&
    createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
    }),
].filter(Boolean);

const rootReducer = combineReducers({
  [userReducer.name]: combineReducers(userReducer.reducers),
});

const composeEnhancers = process.browser ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const initializeStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...allMiddlewares)));
};
