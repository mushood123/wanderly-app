import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUp} from './src/screens';
import {StatusBar, Text, TextInput} from 'react-native';
import {font} from './src/theme/fonts';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
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
    </NavigationContainer>
    // <NavigationContainer>
    //   <StatusBar hidden={true} />
    //   <RootStack.Navigator>
    //     <RootStack.Screen
    //       options={{headerShown: false}}
    //       name="SignUp"
    //       component={SignUp}
    //     />
    //     <RootStack.Screen
    //       options={{headerShown: false}}
    //       name="SignIn"
    //       component={SignIn}
    //     />
    //   </RootStack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.fontFamily = font.primary;
