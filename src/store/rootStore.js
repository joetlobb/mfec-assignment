import { createStore, combineReducers } from 'redux';

import reducers from './reducers';

export const rootReducer = combineReducers({ reducers });

export const store = createStore(
  rootReducer,
);