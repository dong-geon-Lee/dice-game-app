import React from "react";
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

const DiceLeftSide = ({ active, playerWin, player1Score, cur1Score }) => {
  return (
    <Left active={active} playerWin={playerWin}>
      <Title>Player 1</Title>
      <Score>{player1Score}</Score>

      {player1Score >= 25 && playerWin ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{active ? "Playing!" : "Waiting..."}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{cur1Score}</Span>
      </CurBox>
    </Left>
  );
};

export default DiceLeftSide;
