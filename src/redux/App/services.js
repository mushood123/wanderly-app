import {firebase} from '../../firebase';
import {setUser} from '../Auth';
import {store} from '../store';
import {setAppLoading} from './actions';

export const getUser = () => {
  firebase.onAuthStateChanged(user => {
    if (user) {
      const _u = JSON.stringify(user);
      firebase.getUser(user?.uid, {
        successCB: _user => {
          store.dispatch(setUser({...JSON.parse(_u), ..._user}));
          store.dispatch(setAppLoading(false));
        },
      });
    } else {
      store.dispatch(setAppLoading(false));
    }
  });
};
