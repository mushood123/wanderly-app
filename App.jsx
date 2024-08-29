import React, {useEffect} from 'react';
import {TextInput} from 'react-native';
import {font} from '~src/theme/fonts';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from '~src/redux/store';
import {Navigator} from '~src/navigator';
import {restore, getUser} from '~src/redux/App';

const App = () => {
  const dispatch = useDispatch();
  const {appLoading} = useSelector(state => state.app);
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    getUser();
    dispatch(restore());
  }, []);

  return (
    <Provider store={store}>
      {!appLoading && <Navigator user={user} />}
    </Provider>
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
