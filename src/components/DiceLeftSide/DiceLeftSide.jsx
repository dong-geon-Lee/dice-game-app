import React from "react";
import { useRecoilValue } from "recoil";
import {
  activeTurnState,
  p1AccScoreState,
  p1CurScoreState,
  playerWinState,
} from "../../recoils/gameState";
import * as S from "./styles";
import * as C from "../../constants/constants";

const DiceLeftSide = () => {
  const activeTurn = useRecoilValue(activeTurnState);
  const playerWin = useRecoilValue(playerWinState);
  const p1AccScore = useRecoilValue(p1AccScoreState);
  const p1CurScore = useRecoilValue(p1CurScoreState);

  const gameWinStatus = p1AccScore >= C.WINNER__SCORE && playerWin;
  const gameContinueStatus = activeTurn ? C.PLAY : C.WAIT;

  return (
    <S.Left active={activeTurn} playerWin={playerWin}>
      <S.Title>Player 1</S.Title>
      <S.Score>{p1AccScore}</S.Score>

      {gameWinStatus ? (
        <S.WinTitle>Game Win!</S.WinTitle>
      ) : (
        <S.Text>{gameContinueStatus}</S.Text>
      )}

      <S.CurBox>
        <S.Label>Current</S.Label>
        <S.Span>{p1CurScore}</S.Span>
      </S.CurBox>
    </S.Left>
  );
};

export default DiceLeftSide;
