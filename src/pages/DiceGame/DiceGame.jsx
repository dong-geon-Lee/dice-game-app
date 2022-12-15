import React, { useEffect, useState } from "react";
import DiceButtons from "../../components/DiceButtons/DiceButtons";
import DiceLeftSide from "../../components/DiceLeftSide/DiceLeftSide";
import DiceRightSide from "../../components/DiceRightSide /DiceRightSide";
import Overlays from "../../components/Overlays/Overlays";
import Modals from "../../components/Modals/Modals";
import { Container, Wrapper, MainContent } from "./styles";
import { diceNumber } from "../../helper/randomDice";
import { activeModalState } from "../../atoms/modalState";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTurnState, playerWinState } from "../../atoms/gameState";

const DiceGame = () => {
  const modalActive = useRecoilValue(activeModalState);
  // const activeTurn = useRecoilValue(activeTurnState);
  // const [, setActiveTurn] = useRecoilState(activeTurnState);
  // const [, setPlayerWin] = useRecoilState(playerWinState);

  // const [diceNum, setDiceNum] = useState(diceNumber());
  // const [cur1Score, setCur1Score] = useState(0);
  // const [cur2Score, setCur2Score] = useState(0);
  // const [player1Score, setPlayer1Score] = useState(0);
  // const [player2Score, setPlayer2Score] = useState(0);
  // const [btnState, setBtnState] = useState(false);

  // let curTotal, scoreTotal;

  // function calcCurScore(diceNumber) {
  //   if (activeTurn) {
  //     curTotal = cur1Score + diceNumber;
  //     setCur1Score(curTotal);
  //   }

  //   if (!activeTurn) {
  //     curTotal = cur2Score + diceNumber;
  //     setCur2Score(curTotal);
  //   }
  // }

  // function calcHoldScorePlayer1() {
  //   scoreTotal = player1Score + cur1Score;

  //   if (scoreTotal >= 25) {
  //     calcPlayer1Win();
  //     return;
  //   }

  //   setActiveTurn((prev) => !prev);
  //   setPlayer1Score(scoreTotal);
  //   setCur1Score(0);
  // }

  // function calcHoldScorePlayer2() {
  //   scoreTotal = player2Score + cur2Score;

  //   if (scoreTotal >= 25) {
  //     calcPlayer2Win();
  //     return;
  //   }

  //   setActiveTurn((prev) => !prev);
  //   setPlayer2Score(scoreTotal);
  //   setCur2Score(0);
  // }

  // function calcPlayer1Win() {
  //   setBtnState(true);
  //   setPlayerWin(true);
  //   setPlayer1Score(scoreTotal);
  //   setCur1Score(0);
  // }

  // function calcPlayer2Win() {
  //   setBtnState(true);
  //   setPlayerWin(true);
  //   setPlayer2Score(scoreTotal);
  //   setCur2Score(0);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCur1Score(0);
  //     setCur2Score(0);
  //     setBtnState(false);
  //   }, 1000);
  //   setBtnState(true);
  // }, [activeTurn, diceNum === 1]);

  // useEffect(() => {
  //   if (diceNum === 1 && (cur1Score === 0 || cur2Score === 0)) {
  //     setTimeout(() => {
  //       setActiveTurn((prev) => !prev);
  //       setDiceNum(diceNumber());
  //       setBtnState(false);
  //     }, 1000);
  //     setBtnState(true);
  //   }
  // }, [diceNum === 1]);

  return (
    <Container>
      {modalActive && <Overlays />}
      {modalActive && <Modals />}

      <Wrapper>
        <MainContent>
          {/* <DiceLeftSide player1Score={player1Score} cur1Score={cur1Score} />
          <DiceRightSide player2Score={player2Score} cur2Score={cur2Score} /> */}
          <DiceLeftSide />
          <DiceRightSide />
        </MainContent>

        <DiceButtons
        // btnState={btnState}
        // diceNum={diceNum}
        // setDiceNum={setDiceNum}
        // diceNumber={diceNumber}
        // setBtnState={setBtnState}
        // setPlayer1Score={setPlayer1Score}
        // setPlayer2Score={setPlayer2Score}
        // setCur1Score={setCur1Score}
        // setCur2Score={setCur2Score}
        // calcCurScore={calcCurScore}
        // calcHoldScorePlayer1={calcHoldScorePlayer1}
        // calcHoldScorePlayer2={calcHoldScorePlayer2}
        />
      </Wrapper>
    </Container>
  );
};

export default DiceGame;
