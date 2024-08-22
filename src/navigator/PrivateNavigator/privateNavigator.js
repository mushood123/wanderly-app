import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';
import {BottomTabNavigator} from './bottomTabNavigator';
import {ProfileHome} from '../../screens';
import {AuthContext} from '../../contexts';

const RootStack = createNativeStackNavigator();

export const PrivateNavigator = () => {
  const {user} = useContext(AuthContext);
  return (
    <RootStack.Navigator
      initialRouteName={
        user?.userData?.name ? ROUTES.BottomTabNavigator : ROUTES.Profile
      }>
      <RootStack.Screen
        options={{headerShown: false}}
        name={ROUTES.BottomTabNavigator}
        component={BottomTabNavigator}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name={ROUTES.Profile}
        component={ProfileHome}
      />
    </RootStack.Navigator>
  );
};
