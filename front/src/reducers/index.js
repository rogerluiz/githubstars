// import { clickReducer } from './clickReducer';
import { usernameReducer } from './repositoriesReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  usernameState: usernameReducer,
});