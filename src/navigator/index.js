import React from 'react';
import { StatusBar } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateNavigator } from './PrivateNavigator';
import { PublicNavigator } from './PublicNavigator';

export * from '../routes';

export const Navigator = ({ user }) => (
    <NavigationContainer
        onReady={() => {
            BootSplash.hide();
        }}
    >
        <StatusBar hidden />
        {user === null ? <PublicNavigator /> : <PrivateNavigator />}
    </NavigationContainer>
);
