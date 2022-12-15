import React from "react";
import { useRecoilValue } from "recoil";
import {
  activeTurnState,
  p1CurTotalState,
  p1ScoreTotalState,
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
  const activeTurnValue = useRecoilValue(activeTurnState);
  const playerWin = useRecoilValue(playerWinState);
  const player1Score = useRecoilValue(p1ScoreTotalState);
  const cur1Score = useRecoilValue(p1CurTotalState);

  return (
    <Left active={activeTurnValue} playerWin={playerWin}>
      <Title>Player 1</Title>
      <Score>{player1Score}</Score>

      {player1Score >= 25 && playerWin ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{activeTurnValue ? "Playing!" : "Waiting..."}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{cur1Score}</Span>
      </CurBox>
    </Left>
  );
};

export default DiceLeftSide;
