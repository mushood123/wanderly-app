import React from 'react';
import {PackagesHome} from '../../screens';
import {ROUTES} from '../routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {font} from '../../theme/fonts';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, fontFamily: font.primary},
        tabBarItemStyle: {paddingTop: 60},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen name={ROUTES['All Offers']} component={PackagesHome} />
      <Tab.Screen name={ROUTES['Accepted Offers']} component={PackagesHome} />
      <Tab.Screen name={ROUTES['Created Offers']} component={PackagesHome} />
    </Tab.Navigator>
  );
};
