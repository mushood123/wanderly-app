import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={styles.text}>
        Sign_up
      </Text>
    </View>
  );
};
