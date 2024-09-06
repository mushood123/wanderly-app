import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

export const Button = ({
    onPress,
    title,
    style,
    textStyle,
    disabled = false,
}) => (
    <ButtonContainer
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled}
        $d={disabled}
        style={style}
    >
        <ButtonText style={textStyle}>{title}</ButtonText>
    </ButtonContainer>
);
