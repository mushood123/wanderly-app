import {put, takeLatest} from 'redux-saga/effects';
import {APP} from './constants';
import {setLanguage} from '../Language';
import {language} from '../../locales';
import {getDeviceLanguage} from '../../utils';

// Generator function
function* restore() {
  try {
    console.log('restore called');
    yield put(setLanguage(language[getDeviceLanguage()]));
  } catch (error) {}
}

// Generator function
export default function* App() {
  yield takeLatest(APP.restore, restore);
}
