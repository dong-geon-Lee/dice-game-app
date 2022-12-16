import React from "react";
import { useRecoilValue } from "recoil";
import {
  activeTurnState,
  p1AccScoreState,
  p1CurScoreState,
  playerWinState,
} from "../../atoms/gameState";
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

  return (
    <Left active={activeTurn} playerWin={playerWin}>
      <Title>Player 1</Title>
      <Score>{p1AccScore}</Score>

      {p1AccScore >= 25 && playerWin ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{activeTurn ? "Playing!" : "Waiting..."}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{p1CurScore}</Span>
      </CurBox>
    </Left>
  );
};

export default DiceLeftSide;
