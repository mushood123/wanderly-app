import React from 'react';
import { Text as RNText } from 'react-native';
import { styles } from './styles';

export const Text = props => (
    <RNText
        {...props}
        style={{ ...styles.defaultText, ...props.style }}
    >
        {props.children}
    </RNText>
);
