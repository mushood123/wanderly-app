import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

export const FormField = ({
  title,
  style,
  secureTextEntry,
  keyboardType,
  isEmpty,
  handleOnChangeText,
}) => {
  return (
    <LinearGradient
      start={{x: 0.2, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#c7ceec', '#8a98e3']}
      style={{
        ...(isEmpty ? styles.emptyContainer : styles.container),
        ...style,
      }}>
      <TextInput
        placeholderTextColor={'#294f8e90'}
        style={styles.textInput}
        placeholder={title}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={handleOnChangeText}
      />
    </LinearGradient>
  );
};
