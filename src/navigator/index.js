import React from 'react';
import {PublicNavigator} from './PublicNavigator';
import {PrivateNavigator} from './PrivateNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import BootSplash from 'react-native-bootsplash';

export * from './routes';

export const Navigator = ({user}) => (
  <NavigationContainer
    onReady={() => {
      BootSplash.hide();
    }}>
    <StatusBar hidden={true} />
    {user === null ? <PublicNavigator /> : <PrivateNavigator />}
  </NavigationContainer>
);
