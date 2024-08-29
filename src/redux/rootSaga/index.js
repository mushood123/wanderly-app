import {all} from 'redux-saga/effects';
import {authSaga} from '../Auth';
import {appSaga} from '../App';

function* rootSaga() {
  yield all([appSaga(), authSaga()]);
}

export default rootSaga;
