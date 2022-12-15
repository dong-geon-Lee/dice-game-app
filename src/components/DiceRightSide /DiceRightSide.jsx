import React from "react";
import { useRecoilValue } from "recoil";
import {
  activeTurnState,
  p2CurTotalState,
  p2ScoreTotalState,
  playerWinState,
} from "../../atoms/gameState";
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

const DiceRightSide = () => {
  const activeTurnValue = useRecoilValue(activeTurnState);
  const playerWin = useRecoilValue(playerWinState);
  const player2Score = useRecoilValue(p2ScoreTotalState);
  const cur2Score = useRecoilValue(p2CurTotalState);

  return (
    <Right active={!activeTurnValue} playerWin={playerWin}>
      <Title>Player 2</Title>
      <Score>{player2Score}</Score>

      {player2Score >= 25 && playerWin ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{!activeTurnValue ? "Playing!" : "Waiting..."}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{cur2Score}</Span>
      </CurBox>
    </Right>
  );
};

export default DiceRightSide;
