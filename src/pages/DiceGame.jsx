import React, { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeModalState } from "../recoils/modalState";
import { diceNumber, displayWinPlayer } from "../helpers/helpers";
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
import {
  DiceButtons,
  DiceLeftSide,
  DiceRightSide,
  Modals,
  Overlays,
} from "../components/index";
import * as S from "./styles";
import * as C from "../constants/constants";

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

  const calcHoldScorePlayer1 = useCallback(() => {
    if (gameScore >= C.WINNER__SCORE) {
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
  }, [gameScore]);

  const calcHoldScorePlayer2 = useCallback(() => {
    if (gameScore >= C.WINNER__SCORE) {
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
  }, [gameScore]);

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
    <S.Container>
      {activeModal && <Overlays />}
      {activeModal && <Modals />}

      <S.Wrapper>
        <S.Div>
          <DiceLeftSide />
          <DiceRightSide />
        </S.Div>
        <DiceButtons
          calcHoldScorePlayer1={calcHoldScorePlayer1}
          calcHoldScorePlayer2={calcHoldScorePlayer2}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default DiceGame;
