import React from "react";
import { useRecoilState } from "recoil";
import { closeModals } from "../../helpers/helpers";
import { modalState, overlayState } from "../../recoils/modalState";
import { Container, Button, Title, Text, Strong } from "./styles";
import {
  CLOSE__BTN,
  GAME__RULES__FIVE,
  GAME__RULES__FOUR,
  GAME__RULES__ONE,
  GAME__RULES__THREE,
  GAME__RULES__TWO,
} from "../../constants/constants";

const Modals = () => {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  return (
    <Container>
      <Button onClick={() => closeModals(setModals, setOverlays)}>
        {CLOSE__BTN}
      </Button>
      <Title>
        <Strong>게임목표</Strong> : <Strong>25</Strong>점을 획득하세요!
      </Title>
      <Text>{GAME__RULES__ONE}</Text>
      <Text>{GAME__RULES__TWO}</Text>
      <Text>{GAME__RULES__THREE}</Text>
      <Text>{GAME__RULES__FOUR}</Text>
      <Text>{GAME__RULES__FIVE}</Text>
    </Container>
  );
};

export default Modals;
