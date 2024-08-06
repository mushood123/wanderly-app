import React from 'react';
import {TextInput} from 'react-native';
import {font} from './src/theme/fonts';
import {GlobalStates} from './src/contexts';
import {Navigator} from './src/navigator';

const App = () => {
  return (
    <GlobalStates>
      <Navigator />
    </GlobalStates>
  );
};

export default App;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
