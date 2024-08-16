import React from 'react';
import {DashboardHome, ProfileHome} from '../../screens';
import {ROUTES} from '../routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TopTabNavigator} from './topTabNavigator';
import {IconDashboard, IconPackages, IconProfile} from '../../assets';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.Dashboard}
        component={DashboardHome}
        options={{
          headerShown: false,
          tabBarIcon: () => <IconDashboard height={30} width={30} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Packages}
        component={TopTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => <IconPackages height={30} width={30} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Profile}
        component={ProfileHome}
        options={{
          headerShown: false,
          tabBarIcon: () => <IconProfile height={30} width={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
