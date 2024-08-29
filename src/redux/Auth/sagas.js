import {takeLatest} from 'redux-saga/effects';
import {AUTH} from './constants';

// Generator function
function* setUserSaga({payload, type}) {
  try {
    console.log('setUserSaga called', type);
  } catch (error) {}
}

// Generator function
export default function* Auth() {
  yield takeLatest(AUTH.setUser, setUserSaga);
}
