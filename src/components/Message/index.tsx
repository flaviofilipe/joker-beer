import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, TextCard, Content, ImageCard, CloseView, MessageBox } from './styles';
import { Ionicons } from '@expo/vector-icons';

type Params = {
    title: string;
    image: ImageSourcePropType;
    useVisible: [boolean, CallableFunction];
};

export default function Message(params: Params) {
    const [visible, setVisible] = params.useVisible;

    return (
        <Container>
            <Content>
                <CloseView onPress={() => setVisible(false)}>
                    <Ionicons name="md-close-circle-outline" size={30} color="black" />
                </CloseView>
                <MessageBox>
                    <ImageCard source={params.image} />
                    <TextCard>{params.title}</TextCard>
                </MessageBox>
            </Content>
        </Container>
    );
}