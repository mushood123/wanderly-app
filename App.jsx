import React from 'react';
import {TextInput} from 'react-native';
import {font} from './src/theme/fonts';
import {GlobalStates} from './src/contexts';
import {Navigator} from './src/navigator';
import {StripeProvider} from '@stripe/stripe-react-native';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_4w4O2cKeqIBDIzucoUBDOKYO';

const App = () => {
  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <GlobalStates>
        <Navigator />
      </GlobalStates>
    </StripeProvider>
  );
};

export default App;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
