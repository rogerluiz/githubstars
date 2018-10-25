// import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';
import {
  repositoriesReducer
} from './repositoriesReducer';

export const Reducers = combineReducers({
  repositoriesState: repositoriesReducer
});