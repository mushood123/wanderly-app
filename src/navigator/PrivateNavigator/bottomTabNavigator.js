import {DashboardHome, ProfileHome} from '../../screens';
import {ROUTES} from '../routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TopTabNavigator} from './topTabNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name={ROUTES.Dashboard}
        component={DashboardHome}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={ROUTES.Packages}
        component={TopTabNavigator}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={ROUTES.Profile}
        component={ProfileHome}
      />
    </Tab.Navigator>
  );
};
