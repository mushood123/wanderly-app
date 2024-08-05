import {Text as RNText} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Text = props => {
  return (
    <RNText {...props} style={{...styles.defaultText, ...props.style}}>
      {props.children}
    </RNText>
  );
};
