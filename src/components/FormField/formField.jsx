import React from 'react';
import { TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

export const FormField = ({
    title,
    style,
    secureTextEntry,
    keyboardType,
    isValidate,
    handleOnChangeText,
    value,
    disable,
}) => (
    <LinearGradient
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#c7ceec', '#8a98e3']}
        style={{
            ...isValidate ? styles.emptyContainer : styles.container,
            ...style,
        }}
    >
        <TextInput
            editable={!disable}
            value={value}
            placeholderTextColor="#294f8e90"
            style={styles.textInput}
            placeholder={title}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            onChangeText={handleOnChangeText}
        />
    </LinearGradient>
);
