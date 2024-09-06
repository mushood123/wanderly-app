import { all } from 'redux-saga/effects';
import { appSaga } from '../App';
import { authSaga } from '../Auth';

function* rootSaga() {
    yield all([appSaga(), authSaga()]);
}

export default rootSaga;
