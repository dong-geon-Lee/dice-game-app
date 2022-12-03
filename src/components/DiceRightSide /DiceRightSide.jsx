import React from "react";
import {
  Right,
  Title,
  Score,
  WinTitle,
  Text,
  CurBox,
  Label,
  Span,
} from "./styles";

const DiceRightSide = ({ active, playerWin, player2Score, cur2Score }) => {
  return (
    <Right active={!active} playerWin={playerWin}>
      <Title>Player 2</Title>
      <Score>{player2Score}</Score>

      {player2Score >= 25 && playerWin ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{!active ? "Playing!" : "Waiting..."}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{cur2Score}</Span>
      </CurBox>
    </Right>
  );
};

export default DiceRightSide;
