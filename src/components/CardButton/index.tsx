import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Container, TextButton } from './styles';

type Params = {
    num: number;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export default function CardButton(params: Params) {
    return (
        <Container onPress={params.onPress}>
            <TextButton>{params.num}</TextButton>
        </Container>
    );
}