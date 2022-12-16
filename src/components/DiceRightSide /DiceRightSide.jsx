import React from "react";
import { useRecoilValue } from "recoil";
import {
  activeTurnState,
  p2AccScoreState,
  p2CurScoreState,
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
  const activeTurn = useRecoilValue(activeTurnState);
  const playerWin = useRecoilValue(playerWinState);
  const p2AccScore = useRecoilValue(p2AccScoreState);
  const p2CurScore = useRecoilValue(p2CurScoreState);

  return (
    <Right active={!activeTurn} playerWin={playerWin}>
      <Title>Player 2</Title>
      <Score>{p2AccScore}</Score>

      {p2AccScore >= 25 && playerWin ? (
        <WinTitle>Game Win!</WinTitle>
      ) : (
        <Text>{!activeTurn ? "Playing!" : "Waiting..."}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{p2CurScore}</Span>
      </CurBox>
    </Right>
  );
};

export default DiceRightSide;
