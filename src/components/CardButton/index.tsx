import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Container, TextButton } from './styles';

type Params = {
    num: number;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    disabled: boolean;
};

export default function CardButton(params: Params) {
    return (
        <Container onPress={params.onPress} disabled={params.disabled}>
            <TextButton disabled={params.disabled}>{params.num}</TextButton>
        </Container>
    );
}