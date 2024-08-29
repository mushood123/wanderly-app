import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import {languageReducer} from '../Language';
import {authReducer} from '../Auth';
import {packageReducer} from '../Packages';
import rootSaga from '../rootSaga';
import {appReducer} from '../App';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  language: languageReducer,
  package: packageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => {
    return [sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);
