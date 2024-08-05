import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export const FormField = ({
  title,
  style,
  secureTextEntry,
  keyboardType,
  isValidate,
  handleOnChangeText,
  value,
}) => {
  return (
    <LinearGradient
      start={{x: 0.2, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#c7ceec', '#8a98e3']}
      style={{
        ...(isValidate ? styles.emptyContainer : styles.container),
        ...style,
      }}>
      <TextInput
        value={value}
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
