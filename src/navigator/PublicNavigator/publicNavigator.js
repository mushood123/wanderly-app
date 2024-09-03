import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../routes';
import { SignIn, SignUp } from '../../screens';

const RootStack = createNativeStackNavigator();

export const PublicNavigator = () => (
    <RootStack.Navigator>
        <RootStack.Screen
            options={{ headerShown: false }}
            name={ROUTES.SignIn}
            component={SignIn}
        />
        <RootStack.Screen
            options={{ headerShown: false }}
            name={ROUTES.SignUp}
            component={SignUp}
        />
    </RootStack.Navigator>
);
