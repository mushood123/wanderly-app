import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import {BottomTabNavigator} from './bottomTabNavigator';

const RootStack = createNativeStackNavigator();

export const PrivateNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      options={{headerShown: false}}
      name={ROUTES.BottomTabNavigator}
      component={BottomTabNavigator}
    />
  </RootStack.Navigator>
);
