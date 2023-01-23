import React from "react";
import { useRecoilValue } from "recoil";
import { WINNER__SCORE } from "../../constants/constants";
import {
  activeTurnState,
  p1AccScoreState,
  p1CurScoreState,
  playerWinState,
} from "../../recoils/gameState";
import {
  Left,
  Title,
  Score,
  WinTitle,
  Text,
  CurBox,
  Label,
  Span,
} from "./styles";

const DiceLeftSide = () => {
  const activeTurn = useRecoilValue(activeTurnState);
  const playerWin = useRecoilValue(playerWinState);
  const p1AccScore = useRecoilValue(p1AccScoreState);
  const p1CurScore = useRecoilValue(p1CurScoreState);

  const gameWinStatus = p1AccScore >= WINNER__SCORE && playerWin;
  const gameContinueStatus = activeTurn ? "Playing!" : "Waiting...";

  return (
    <Left active={activeTurn} playerWin={playerWin}>
      <Title>Player 1</Title>
      <Score>{p1AccScore}</Score>

      {gameWinStatus ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{gameContinueStatus}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{p1CurScore}</Span>
      </CurBox>
    </Left>
  );
};

export default DiceLeftSide;
