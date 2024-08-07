import {PackagesHome} from '../../screens';
import {ROUTES} from '../routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.Packages} component={PackagesHome} />
    </Tab.Navigator>
  );
};
