import styled from 'styled-components/native';


export const Container = styled.View`
 position: absolute;
 background-color: rgba(0, 0, 0, 0.8);
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
 align-self: center;
`;

export const Content = styled.View`
 background-color: white;
 width: 80%;
 height: 30%;
 border-radius: 10px;
 align-items: center;
`;

export const TextCard = styled.Text`
 font-size: 16px;
 font-weight: bold;
 text-align: center;
`;

export const ImageCard = styled.Image`
 width: 150px;
 height: 150px;
 resize-mode: contain;
`;

// stretch

export const CloseView = styled.TouchableOpacity`
 align-self: flex-end;
 padding: 10px;
`;

export const MessageBox = styled.View`
 justify-content: center;
 align-items: center;
 flex: 1;
 margin-bottom: 20px;
 padding: 10px;
`;