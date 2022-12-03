import React from "react";
import { Button, DiceImg, ItemsBox } from "./styles";

const DiceButtons = ({
  diceNum,
  diceNumber,
  playerWin,
  setPlayer1Score,
  setPlayer2Score,
  setCur1Score,
  setCur2Score,
  setActive,
  setPlayerWin,
  setDiceNum,
  calcCurScore,
  active,
  calcHoldScorePlayer1,
  calcHoldScorePlayer2,
  btnState,
  setBtnState,
  handleModals,
}) => {
  const handleResetBtn = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCur1Score(0);
    setCur2Score(0);
    setActive(true);
    setBtnState(false);
    setPlayerWin(false);
    setDiceNum(diceNumber());
  };

  const handleDiceBtn = () => {
    if (diceNum === 1) setActive((prev) => !prev);
    setDiceNum(diceNumber());
    calcCurScore(diceNum);
  };

  const handleHoldBtn = () => {
    if (active) calcHoldScorePlayer1();
    if (!active) calcHoldScorePlayer2();
  };

  return (
    <ItemsBox>
      <Button className="guide__modals" onClick={() => handleModals()}>
        📓 Game Guide
      </Button>
      <Button className="new__game" onClick={() => handleResetBtn()}>
        🔄 New Game
      </Button>
      <DiceImg
        src={`${process.env.PUBLIC_URL}/img/dice-${diceNum}.png`}
        alt="dice-img"
        className="dice__img"
      />
      <Button
        onClick={() => handleDiceBtn()}
        className="roll__dice"
        disabled={btnState}
        playerWin={playerWin}
      >
        🎲 Roll Dice
      </Button>
      <Button
        onClick={() => handleHoldBtn()}
        className="hold"
        disabled={btnState || diceNum === 1}
        playerWin={playerWin}
      >
        📥 Hold
      </Button>
    </ItemsBox>
  );
};

export default DiceButtons;
