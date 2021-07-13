import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, TextCard, Content, ImageCard, CloseView, MessageBox } from './styles';
import { Ionicons } from '@expo/vector-icons';

type Params = {
    title: string;
    useVisible: [boolean, CallableFunction];
    wins: boolean
};

export default function Message(params: Params) {
    const [visible, setVisible] = params.useVisible;

    if(!visible) return<></>
    const image = () => {
        console.log(params.wins)
        if(params.wins){
            return require("../../../assets/joker_wins.png")
        }
        
        return require("../../../assets/joker_challenge.png")
    }

    return (
        <Container>
            <Content>
                <CloseView onPress={() => setVisible(false)}>
                    <Ionicons name="md-close-circle-outline" size={30} color="black" />
                </CloseView>
                <MessageBox>
                    <ImageCard source={image()} />
                    <TextCard>{params.title}</TextCard>
                </MessageBox>
            </Content>
        </Container>
    );
}