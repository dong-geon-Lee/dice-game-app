import React from "react";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../atoms/modalState";
import { Container, Button, Title, Text, Strong } from "./styles";

const Modals = () => {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const handleModals = () => {
    setModals(false);
    setOverlays(false);
  };

  return (
    <Container>
      <Button onClick={() => handleModals()}>X</Button>
      <Title>
        <Strong>게임목표</Strong> : <Strong>25</Strong>점을 획득하세요!
      </Title>
      <Text>1. [ Roll dice ] 버튼을 클릭하면 숫자가 증가합니다.</Text>
      <Text>2. [ Hold ] 버튼을 클릭하면 누적된 점수를 기록합니다.</Text>
      <Text>3. [ New game ] 버튼을 클릭하면 게임을 재시작 합니다.</Text>
      <Text>4. 주사위가 [ 1 ]이 나오면 숫자가 0으로 [ 초기화 ] 됩니다.</Text>
      <Text>5. 주사위가 [ 1 ]이 나오면 [ 순서 ]가 상대에게 넘어갑니다.</Text>
    </Container>
  );
};

export default Modals;
