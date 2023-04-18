import React from "react";
import { useRecoilValue } from "recoil";
import {
  activeTurnState,
  p2AccScoreState,
  p2CurScoreState,
  playerWinState,
} from "../../recoils/gameState";
import * as S from "./styles";
import * as C from "../../constants/constants";

const DiceRightSide = () => {
  const activeTurn = useRecoilValue(activeTurnState);
  const playerWin = useRecoilValue(playerWinState);
  const p2AccScore = useRecoilValue(p2AccScoreState);
  const p2CurScore = useRecoilValue(p2CurScoreState);
  const gameWinStatus = p2AccScore >= C.WINNER__SCORE && playerWin;
  const gameContinueStatus = !activeTurn ? C.PLAY : C.WAIT;

  return (
    <S.Right active={!activeTurn} playerWin={playerWin}>
      <S.Title>{C.PLAYER__2}</S.Title>
      <S.Score>{p2AccScore}</S.Score>
      {gameWinStatus ? (
        <S.WinTitle>{C.GAME__WIN}</S.WinTitle>
      ) : (
        <S.Text>{gameContinueStatus}</S.Text>
      )}
      <S.CurBox>
        <S.Label>Current</S.Label>
        <S.Span>{p2CurScore}</S.Span>
      </S.CurBox>
    </S.Right>
  );
};

export default DiceRightSide;
