import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {languageReducer} from '../Language';
import {authReducer} from '../Auth';
import {packageReducer} from '../Packages';

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
  package: packageReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
