import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import CardButton from "../../components/CardButton";
import { Container, Content } from "./styles";
import Message from "../../components/Message";
import { useSortMessage, MessageType, MESSAGES } from "../../hooks";

export default function Home() {
  const navigation = useNavigation();

  const [nums, setNums] = useState(Array.from(Array(50).keys()));
  const useVisible = useState(false);
  const [visible, setVisible] = useVisible;
  const [cardMessage, setCardMessage] = useState("");
  const [wins, setWins] = useState(false);
  const [messages, setMessages] = useState(MESSAGES);
  const [inactiveButtons, setInactiveButtons] = useState([-1]);

  useEffect(() => {
    resetData()
  }, []);

  useEffect(() => {
    if (wins && !visible) {
        resetData()
    }
  }, [visible]);

  const resetData = () => {
    setMessages(useSortMessage());
    setInactiveButtons([-1]);
  } 

  const disableButton = (buttonNumber: number) => {
    if (!inactiveButtons.includes(buttonNumber))
      setInactiveButtons([...inactiveButtons, buttonNumber]);
  };

  const onPressCardButton = (numberPressed: number) => {
    disableButton(numberPressed);
    if (messages.wins.position == numberPressed + 1) {
      setCardMessage(messages.wins.text);
      setWins(true);
      setVisible(true);
    }

    messages.challenges.map((challenge) => {
      if (challenge.position == numberPressed + 1) {
        setCardMessage(challenge.text);
        setWins(false);
        setVisible(true);
      }
    });
  };

  return (
    <Container>
      <Content>
        {nums.map((n) => (
          <CardButton
            disabled={inactiveButtons.includes(n)}
            onPress={() => onPressCardButton(n)}
            key={n}
            num={n + 1}
          />
        ))}
        <StatusBar style="auto" />
      </Content>

      <Message title={cardMessage} useVisible={useVisible} wins={wins} />
    </Container>
  );
}
