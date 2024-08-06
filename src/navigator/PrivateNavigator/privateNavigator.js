import {DashboardHome} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../routes';

const RootStack = createNativeStackNavigator();

export const PrivateNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      options={{headerShown: false}}
      name={ROUTES.Dashboard}
      component={DashboardHome}
    />
  </RootStack.Navigator>
);
