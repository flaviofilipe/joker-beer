import styled from 'styled-components/native';
import { TextProps } from 'react-native';

interface TextType extends TextProps {
    disabled: boolean;
  }

export const Container = styled.TouchableOpacity`
 background-color: ${props => props.disabled ? '#C5C5C5': '#fff'};
 align-items: center;
 justify-content: center;
 width: 60px;
 height: 60px;
 border-radius: 10px;
 margin: 5px;
`;

export const TextButton = styled.Text<TextType>`
    color: ${props => props.disabled ? '#fff': '#FF0000'};
    font-size: 16px;
`;
