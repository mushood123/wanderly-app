import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardHome, SignIn, SignUp} from './src/screens';
import {StatusBar, TextInput} from 'react-native';
import {font} from './src/theme/fonts';
import {firebase} from './src/firebase';

const RootStack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log('SIGNEDIN_USER', user);
    const getUser = async () => {
      firebase.onAuthStateChanged(user => setUser(user));
    };
    getUser();
  }, [user]);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />

      {user === null ? (
        <RootStack.Navigator>
          <RootStack.Screen
            options={{headerShown: false}}
            name="SignIn"
            component={SignIn}
          />
          <RootStack.Screen
            options={{headerShown: false}}
            name="SignUp"
            component={SignUp}
          />
        </RootStack.Navigator>
      ) : (
        <RootStack.Navigator>
          <RootStack.Screen
            options={{headerShown: false}}
            name="Dashboard"
            component={DashboardHome}
          />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
