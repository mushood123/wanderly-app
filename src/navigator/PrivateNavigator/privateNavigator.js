import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '~src/routes';
import { BottomTabNavigator } from './bottomTabNavigator';
import { ProfileHome } from '../../screens';

const RootStack = createNativeStackNavigator();

export const PrivateNavigator = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <RootStack.Navigator
            initialRouteName={
                user?.userData?.name ? ROUTES.BottomTabNavigator : ROUTES.Profile
            }
        >
            <RootStack.Screen
                options={{ headerShown: false }}
                name={ROUTES.BottomTabNavigator}
                component={BottomTabNavigator}
            />
            <RootStack.Screen
                options={{ headerShown: false }}
                name={ROUTES.Profile}
                component={ProfileHome}
            />
        </RootStack.Navigator>
    );
};
