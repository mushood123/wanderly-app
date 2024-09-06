import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '~src/routes';
import { TopTabNavigator } from './topTabNavigator';
import {
    IconDashboard,
    IconPackages,
    IconPayment,
    IconProfile,
} from '../../assets';
import { DashboardHome, ProfileHome, Checkout } from '../../screens';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={ROUTES.Dashboard}
            component={DashboardHome}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <IconDashboard
                        height={30}
                        width={30}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={ROUTES.Packages}
            component={TopTabNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <IconPackages
                        height={30}
                        width={30}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={ROUTES.Profile}
            component={ProfileHome}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <IconProfile
                        height={30}
                        width={30}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={ROUTES.Checkout}
            component={Checkout}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <IconPayment
                        height={30}
                        width={30}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);
