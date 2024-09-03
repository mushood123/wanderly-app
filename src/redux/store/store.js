import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { appReducer } from '../App';
import { authReducer } from '../Auth';
import { languageReducer } from '../Language';
import { packageReducer } from '../Packages';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    language: languageReducer,
    package: packageReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
