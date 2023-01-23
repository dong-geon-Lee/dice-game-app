import React, { useEffect } from "react";
import DiceButtons from "../components/DiceButtons/DiceButtons";
import DiceLeftSide from "../components/DiceLeftSide/DiceLeftSide";
import DiceRightSide from "../components/DiceRightSide /DiceRightSide";
import Overlays from "../components/Overlays/Overlays";
import Modals from "../components/Modals/Modals";
import { Container, Wrapper, Div } from "./styles";
import { diceNumber, displayWinPlayer } from "../helpers/helpers";
import { activeModalState } from "../recoils/modalState";
import { useRecoilState, useRecoilValue } from "recoil";
import { WINNER__SCORE } from "../constants/constants";
import {
  activeTurnState,
  btnDisabledState,
  gameScoreState,
  p1AccScoreState,
  p1CurScoreState,
  p2AccScoreState,
  p2CurScoreState,
  playerWinState,
  randomDiceState,
} from "../recoils/gameState";

const DiceGame = () => {
  const [, setP1CurScore] = useRecoilState(p1CurScoreState);
  const [, setP2CurScore] = useRecoilState(p2CurScoreState);
  const [, setP1AccScore] = useRecoilState(p1AccScoreState);
  const [, setP2AccScore] = useRecoilState(p2AccScoreState);
  const [, setActiveTurn] = useRecoilState(activeTurnState);
  const [, setRandomDice] = useRecoilState(randomDiceState);
  const [, setPlayerWin] = useRecoilState(playerWinState);
  const [, setBtnDisabled] = useRecoilState(btnDisabledState);

  const activeTurn = useRecoilValue(activeTurnState);
  const randomDice = useRecoilValue(randomDiceState);
  const activeModal = useRecoilValue(activeModalState);
  const gameScore = useRecoilValue(gameScoreState);

  const calcHoldScorePlayer1 = () => {
    if (gameScore >= WINNER__SCORE) {
      displayWinPlayer(
        setBtnDisabled,
        setPlayerWin,
        setP1CurScore,
        setP1AccScore,
        gameScore
      );
      return;
    }

    setActiveTurn((prevState) => !prevState);
    setP1AccScore(gameScore);
    setP1CurScore(0);
  };

  const calcHoldScorePlayer2 = () => {
    if (gameScore >= WINNER__SCORE) {
      displayWinPlayer(
        setBtnDisabled,
        setPlayerWin,
        setP2CurScore,
        setP2AccScore,
        gameScore
      );
      return;
    }

    setActiveTurn((prevState) => !prevState);
    setP2AccScore(gameScore);
    setP2CurScore(0);
  };

  useEffect(() => {
    setBtnDisabled(true);
    setTimeout(() => {
      setP1CurScore(0);
      setP2CurScore(0);
      setBtnDisabled(false);

      if (randomDice === 1) {
        setRandomDice(diceNumber());
        setActiveTurn((prev) => !prev);
      }
    }, 1000);
  }, [activeTurn, randomDice === 1]);

  return (
    <Container>
      {activeModal && <Overlays />}
      {activeModal && <Modals />}

      <Wrapper>
        <Div>
          <DiceLeftSide />
          <DiceRightSide />
        </Div>

        <DiceButtons
          calcHoldScorePlayer1={calcHoldScorePlayer1}
          calcHoldScorePlayer2={calcHoldScorePlayer2}
        />
      </Wrapper>
    </Container>
  );
};

export default DiceGame;
