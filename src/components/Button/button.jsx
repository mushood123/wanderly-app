import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

export const Button = ({
  onPress,
  title,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, disabled && styles.disabledButton]}
      activeOpacity={0.7}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
