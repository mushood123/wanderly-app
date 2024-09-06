import { put, takeLatest } from 'redux-saga/effects';
import { APP } from './constants';
import { language } from '../../locales';
import { getDeviceLanguage } from '../../utils';
import { setLanguage } from '../Language';

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
