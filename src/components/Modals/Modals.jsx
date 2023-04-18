import React from "react";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { closeModals } from "../../helpers/helpers";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Modals = () => {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  return (
    <S.Container>
      <S.Button onClick={() => closeModals(setModals, setOverlays)}>
        {C.CLOSE__BTN}
      </S.Button>
      <S.Title>
        <S.Strong>게임목표</S.Strong> : <S.Strong>25</S.Strong>점을 획득하세요!
      </S.Title>
      <S.Text>{C.GAME__RULES__ONE}</S.Text>
      <S.Text>{C.GAME__RULES__TWO}</S.Text>
      <S.Text>{C.GAME__RULES__THREE}</S.Text>
      <S.Text>{C.GAME__RULES__FOUR}</S.Text>
      <S.Text>{C.GAME__RULES__FIVE}</S.Text>
    </S.Container>
  );
};

export default Modals;
