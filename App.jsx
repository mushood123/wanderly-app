import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {font} from './src/theme/fonts';
import {Navigator} from './src/navigator';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import {setLanguage} from './src/redux/Language';
import {getDeviceLanguage} from './src/utils';
import {language} from './src/locales';
import {firebase} from './src/firebase';
import {setUser} from './src/redux/Auth';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(setLanguage(language[getDeviceLanguage()]));
    const getUser = () => {
      firebase.onAuthStateChanged(user => {
        if (user) {
          const _u = JSON.stringify(user);
          firebase.getUser(user.uid, {
            successCB: _user => {
              dispatch(setUser({...JSON.parse(_u), ..._user}));
              setLoading(false);
            },
          });
        } else {
          setLoading(false);
        }
      });
    };
    getUser();
  }, []);
  return (
    <Provider store={store}>{!loading && <Navigator user={user} />}</Provider>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
