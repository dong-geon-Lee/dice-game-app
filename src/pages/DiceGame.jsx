import React, { useEffect } from "react";
import DiceButtons from "../components/DiceButtons/DiceButtons";
import DiceLeftSide from "../components/DiceLeftSide/DiceLeftSide";
import DiceRightSide from "../components/DiceRightSide /DiceRightSide";
import Overlays from "../components/Overlays/Overlays";
import Modals from "../components/Modals/Modals";
import { Container, Wrapper, Div } from "./styles";
import { diceNumber } from "../helper/randomDice";
import { activeModalState } from "../atoms/modalState";
import { useRecoilState, useRecoilValue } from "recoil";
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
} from "../atoms/gameState";

const DiceGame = () => {
  const [, setP1CurScore] = useRecoilState(p1CurScoreState);
  const [, setP2CurScore] = useRecoilState(p2CurScoreState);
  const [, setP1AccScore] = useRecoilState(p1AccScoreState);
  const [, setP2AccScore] = useRecoilState(p2AccScoreState);
  const [, setActiveTurn] = useRecoilState(activeTurnState);
  const [, setRandomDice] = useRecoilState(randomDiceState);
  const [, setPlayerWin] = useRecoilState(playerWinState);
  const [, setBtnDisabled] = useRecoilState(btnDisabledState);

  const p1CurScore = useRecoilValue(p1CurScoreState);
  const p2CurScore = useRecoilValue(p2CurScoreState);
  const activeTurn = useRecoilValue(activeTurnState);
  const randomDice = useRecoilValue(randomDiceState);
  const activeModal = useRecoilValue(activeModalState);
  const gameScore = useRecoilValue(gameScoreState);

  function calcHoldScorePlayer1() {
    if (gameScore >= 25) {
      calcPlayer1Win();
      return;
    }

    setActiveTurn((prevState) => !prevState);
    setP1AccScore(gameScore);
    setP1CurScore(0);
  }

  function calcHoldScorePlayer2() {
    if (gameScore >= 25) {
      calcPlayer2Win();
      return;
    }

    setActiveTurn((prevState) => !prevState);
    setP2AccScore(gameScore);
    setP2CurScore(0);
  }

  function calcPlayer1Win() {
    setBtnDisabled(true);
    setPlayerWin(true);
    setP1AccScore(gameScore);
    setP1CurScore(0);
  }

  function calcPlayer2Win() {
    setBtnDisabled(true);
    setPlayerWin(true);
    setP2AccScore(gameScore);
    setP2CurScore(0);
  }

  useEffect(() => {
    setTimeout(() => {
      setP1CurScore(0);
      setP2CurScore(0);
      setBtnDisabled(false);
    }, 1000);
    setBtnDisabled(true);
  }, [activeTurn, randomDice === 1]);

  useEffect(() => {
    if (randomDice === 1 && (p1CurScore === 0 || p2CurScore === 0)) {
      setTimeout(() => {
        setActiveTurn((prev) => !prev);
        setBtnDisabled(false);
        setRandomDice(diceNumber());
      }, 1000);
      setBtnDisabled(true);
    }
  }, [randomDice === 1]);

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
