import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { diceNumber, openModals } from "../../helpers/helpers";
import { Button, DiceImg, ItemsBox } from "./styles";
import {
  GAME__GUIDE,
  HOLD__GAME,
  NEW__GAME,
  ROLL__DICE,
} from "../../constants/constants";
import {
  activeTurnState,
  btnDisabledState,
  calcP1CurState,
  calcP2CurState,
  p1AccScoreState,
  p1CurScoreState,
  p2AccScoreState,
  p2CurScoreState,
  playerWinState,
  randomDiceState,
} from "../../recoils/gameState";

const DiceButtons = ({ calcHoldScorePlayer1, calcHoldScorePlayer2 }) => {
  const [activeTurn, setActiveTurn] = useRecoilState(activeTurnState);
  const [btnDisabled, setBtnDisabled] = useRecoilState(btnDisabledState);
  const [randomDice, setRandomDice] = useRecoilState(randomDiceState);
  const [, setPlayerWin] = useRecoilState(playerWinState);
  const [, setP1AccScore] = useRecoilState(p1AccScoreState);
  const [, setP1CurScore] = useRecoilState(p1CurScoreState);
  const [, setP2AccScore] = useRecoilState(p2AccScoreState);
  const [, setP2CurScore] = useRecoilState(p2CurScoreState);
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const calcP1Cur = useRecoilValue(calcP1CurState);
  const calcP2Cur = useRecoilValue(calcP2CurState);

  const handleResetBtn = () => {
    setP1AccScore(0);
    setP1CurScore(0);
    setP2AccScore(0);
    setP2CurScore(0);
    setPlayerWin(false);
    setBtnDisabled(false);
    setActiveTurn(true);
    setRandomDice(diceNumber());
  };

  const handleDiceBtn = () => {
    if (randomDice === 1) setActiveTurn((prev) => !prev);
    setRandomDice(diceNumber());

    if (activeTurn) setP1CurScore(calcP1Cur);
    if (!activeTurn) setP2CurScore(calcP2Cur);
  };

  const handleHoldBtn = () => {
    if (activeTurn) calcHoldScorePlayer1();
    if (!activeTurn) calcHoldScorePlayer2();
  };

  return (
    <ItemsBox>
      <Button
        className="guide__modals"
        onClick={() => openModals(setModals, setOverlays)}
      >
        {GAME__GUIDE}
      </Button>
      <Button className="new__game" onClick={() => handleResetBtn()}>
        {NEW__GAME}
      </Button>
      <DiceImg
        src={`${process.env.PUBLIC_URL}/img/dice-${randomDice}.png`}
        alt="dice-img"
        className="dice__img"
      />
      <Button
        onClick={() => handleDiceBtn()}
        className="roll__dice"
        disabled={btnDisabled}
      >
        {ROLL__DICE}
      </Button>
      <Button
        onClick={() => handleHoldBtn()}
        className="hold"
        disabled={btnDisabled}
      >
        {HOLD__GAME}
      </Button>
    </ItemsBox>
  );
};

export default DiceButtons;
