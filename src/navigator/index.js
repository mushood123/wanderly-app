import React from 'react';
import {PublicNavigator} from './PublicNavigator';
import {PrivateNavigator} from './PrivateNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export * from './routes';

export const Navigator = ({user}) => (
  <NavigationContainer>
    <StatusBar hidden={true} />
    {user === null ? <PublicNavigator /> : <PrivateNavigator />}
  </NavigationContainer>
);
