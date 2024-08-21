import React from 'react';
import {TextInput} from 'react-native';
import {font} from './src/theme/fonts';
import {GlobalStates} from './src/contexts';
import {Navigator} from './src/navigator';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStates>
        <Navigator />
      </GlobalStates>
    </Provider>
  );
};

export default App;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
