import React from "react";
import { useRecoilValue } from "recoil";
import { GAME__WIN, PLAYER__2, WINNER__SCORE } from "../../constants/constants";
import {
  activeTurnState,
  p2AccScoreState,
  p2CurScoreState,
  playerWinState,
} from "../../recoils/gameState";
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

  const gameWinStatus = p2AccScore >= WINNER__SCORE && playerWin;
  const gameContinueStatus = !activeTurn ? "Playing!" : "Waiting...";

  return (
    <Right active={!activeTurn} playerWin={playerWin}>
      <Title>{PLAYER__2}</Title>
      <Score>{p2AccScore}</Score>

      {gameWinStatus ? (
        <WinTitle>{GAME__WIN}</WinTitle>
      ) : (
        <Text>{gameContinueStatus}</Text>
      )}

      <CurBox>
        <Label>Current</Label>
        <Span>{p2CurScore}</Span>
      </CurBox>
    </Right>
  );
};

export default DiceRightSide;
