import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CardButton from '../../components/CardButton';
import { Container, Content } from './styles';
import Message from '../../components/Message';


export default function Home() {
    const [nums, setNums] = useState(Array.from(Array(50).keys()));
    const useVisible = useState(false);
    const [visible, setVisible] = useVisible;

    return (
        <Container>
            <Content>
                {nums.map(n => (
                    <CardButton onPress={() => setVisible(true)} key={n} num={n + 1} />
                ))}
                <StatusBar style="auto" />
            </Content>
            {visible &&
                <Message
                    title="Acertou! Você bebe."
                    useVisible={useVisible}
                    image={require('../../../assets/joker_wins.png')} />
            }

        </Container>
    );
}