import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';


export default function ReloadButton() {
  const navigation = useNavigation();

    return (
        <Container>
              <Ionicons name="reload" size={24} color="#A9A9A9" />
        </Container>
    );
}