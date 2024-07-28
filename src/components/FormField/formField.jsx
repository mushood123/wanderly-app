import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const FormField = () => {
  return (
    <View>
      <TextInput
        value={credentials.username}
        style={styles.userInput}
        placeholder="Username"
        onChangeText={username => handleUserInput('username', username)}
      />
    </View>
  );
};
