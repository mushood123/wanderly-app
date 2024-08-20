import React from 'react';
import {DashboardHome, ProfileHome, Checkout} from '../../screens';
import {ROUTES} from '../routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TopTabNavigator} from './topTabNavigator';
import {
  IconDashboard,
  IconPackages,
  IconPayment,
  IconProfile,
} from '../../assets';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.Dashboard}
        component={DashboardHome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconDashboard height={30} width={30} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Packages}
        component={TopTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconPackages height={30} width={30} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Profile}
        component={ProfileHome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconProfile height={30} width={30} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Checkout}
        component={Checkout}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconPayment height={30} width={30} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
