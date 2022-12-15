import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  activeTurnState,
  p1CurTotalState,
  p1ScoreTotalState,
  p2CurTotalState,
  p2ScoreTotalState,
  playerWinState,
} from "../../atoms/gameState";
import { modalState, overlayState } from "../../atoms/modalState";
import { diceNumber } from "../../helper/randomDice";
import { Button, DiceImg, ItemsBox } from "./styles";

const DiceButtons = () => {
  const [diceNum, setDiceNum] = useState(diceNumber());
  const [cur1Score, setCur1Score] = useState(0);
  const [cur2Score, setCur2Score] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [btnState, setBtnState] = useState(false);

  const [activeTurn, setActiveTurn] = useRecoilState(activeTurnState);
  const [playerWin, setPlayerWin] = useRecoilState(playerWinState);

  const [p1CurTotal, setP1CurTotal] = useRecoilState(p1CurTotalState);
  const [p2CurTotal, setP2CurTotal] = useRecoilState(p2CurTotalState);
  const [p1ScoreTotal, setP1ScoreTotal] = useRecoilState(p1ScoreTotalState);
  const [p2ScoreTotal, setP2ScoreTotal] = useRecoilState(p2ScoreTotalState);
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlay] = useRecoilState(overlayState);

  let curTotal, scoreTotal;

  function calcCurScore(diceNumber) {
    if (activeTurn) {
      // curTotal = cur1Score + diceNumber;
      setP1CurTotal(cur1Score + diceNumber);
      setCur1Score(p1CurTotal);
    }

    if (!activeTurn) {
      // curTotal = cur2Score + diceNumber;
      setP2CurTotal(cur2Score + diceNumber);
      setCur2Score(p2CurTotal);
    }
  }

  function calcHoldScorePlayer1() {
    // scoreTotal = player1Score + cur1Score;
    setP1ScoreTotal(player1Score + cur1Score);

    if (p1ScoreTotal >= 25) {
      calcPlayer1Win();
      return;
    }

    setActiveTurn((prev) => !prev);
    setPlayer1Score(p1ScoreTotal);
    setCur1Score(0);
  }

  function calcHoldScorePlayer2() {
    // scoreTotal = player2Score + cur2Score;
    setP2ScoreTotal(player2Score + cur2Score);

    if (p2ScoreTotal >= 25) {
      calcPlayer2Win();
      return;
    }

    setActiveTurn((prev) => !prev);
    setPlayer2Score(p2ScoreTotal);
    setCur2Score(0);
  }

  function calcPlayer1Win() {
    setBtnState(true);
    setPlayerWin(true);
    setPlayer1Score(p1ScoreTotal);
    setCur1Score(0);
  }

  function calcPlayer2Win() {
    setBtnState(true);
    setPlayerWin(true);
    setPlayer2Score(p2ScoreTotal);
    setCur2Score(0);
  }

  const handleResetBtn = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCur1Score(0);
    setCur2Score(0);
    setActiveTurn(true);
    setBtnState(false);
    setPlayerWin(false);
    setDiceNum(diceNumber());
  };

  const handleDiceBtn = () => {
    if (diceNum === 1) setActiveTurn((prev) => !prev);
    setDiceNum(diceNumber());
    calcCurScore(diceNum);
  };

  const handleHoldBtn = () => {
    if (activeTurn) calcHoldScorePlayer1();
    if (!activeTurn) calcHoldScorePlayer2();
  };

  const handleModals = () => {
    setModals(true);
    setOverlay(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCur1Score(0);
      setCur2Score(0);
      setBtnState(false);
    }, 1000);
    setBtnState(true);
  }, [activeTurn, diceNum === 1]);

  useEffect(() => {
    if (diceNum === 1 && (cur1Score === 0 || cur2Score === 0)) {
      setTimeout(() => {
        setActiveTurn((prev) => !prev);
        setDiceNum(diceNumber());
        setBtnState(false);
      }, 1000);
      setBtnState(true);
    }
  }, [diceNum === 1]);

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
