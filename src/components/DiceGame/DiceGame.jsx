import React, { useEffect, useState } from "react";
import { diceNumber } from "../../helper/randomDice";
import {
  Container,
  Wrapper,
  MainContent,
  Left,
  Title,
  Score,
  CurBox,
  Label,
  Span,
  Right,
  ItemsBox,
  Button,
  DiceImg,
  Text,
  WinTitle,
} from "./styles";

const DiceGame = () => {
  const [diceNum, setDiceNum] = useState(diceNumber());
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [cur1Score, setCur1Score] = useState(0);
  const [cur2Score, setCur2Score] = useState(0);
  const [active, setActive] = useState(true);
  const [score, setScore] = useState(0);
  const [btnState, setBtnState] = useState(false);
  const [player1Win, setPlayer1Win] = useState(false);
  const [player2Win, setPlayer2Win] = useState(false);

  const handleDiceClick = () => {
    if (diceNum === 1) {
      setActive((prev) => !prev);
    }

    setDiceNum(diceNumber());
    handleCurScore(diceNum);
  };

  const handleCurScore = (number) => {
    if (active) {
      let total = cur1Score + number;
      setCur1Score(total);
    }

    if (!active) {
      let total = cur2Score + number;
      setCur2Score(total);
    }
  };

  const handleActiveClick = () => {
    if (active) {
      let score = player1 + cur1Score;
      setScore(score);
      if (score >= 20) {
        setBtnState(true);
        setPlayer1Win(true);
        return;
      }
      setActive((prev) => !prev);
      setPlayer1(score);
      setCur1Score(0);
    }

    if (!active) {
      let score = player2 + cur2Score;
      setScore(score);
      if (score >= 20) {
        setBtnState(true);
        setPlayer2Win(true);
        return;
      }
      setActive((prev) => !prev);
      setPlayer2(score);
      setCur2Score(0);
    }
  };

  const handleResetGame = () => {
    setPlayer1(0);
    setPlayer2(0);
    setCur1Score(0);
    setCur2Score(0);
    setActive(true);
    setBtnState(false);
    setPlayer1Win(false);
    setPlayer2Win(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setCur1Score(0);
      setCur2Score(0);
      setBtnState(false);
    }, 1000);
    setBtnState(true);
  }, [active, diceNum === 1]);

  useEffect(() => {
    if (diceNum === 1 && (cur1Score === 0 || cur2Score === 0)) {
      setTimeout(() => {
        setActive((prev) => !prev);
        setDiceNum(diceNumber());
        setBtnState(false);
      }, 1000);
      setBtnState(true);
    }
  }, [diceNum]);

  return (
    <Container>
      <Wrapper>
        <MainContent>
          <Left active={active} gameWin1={player1Win}>
            <Title>Player 1</Title>
            <Score>{player1}</Score>

            {score >= 20 && player1Win ? (
              <WinTitle>Game Win!</WinTitle>
            ) : (
              <Text>{active ? "Playing!" : "Waiting..."}</Text>
            )}

            <CurBox>
              <Label>Current</Label>
              <Span>{cur1Score}</Span>
            </CurBox>
          </Left>
          <Right active={!active} gameWin2={player2Win}>
            <Title>Player 2</Title>
            <Score>{player2}</Score>
            {score >= 20 && player2Win ? (
              <WinTitle>Game Win!</WinTitle>
            ) : (
              <Text>{!active ? "Playing!" : "Waiting..."}</Text>
            )}
            <CurBox>
              <Label>Current</Label>
              <Span>{cur2Score}</Span>
            </CurBox>
          </Right>
        </MainContent>

        <ItemsBox>
          <Button className="new__game" onClick={() => handleResetGame()}>
            🔄 New Game
          </Button>
          <DiceImg
            src={`${process.env.PUBLIC_URL}/img/dice-${diceNum}.png`}
            alt="dice-img"
            className="dice__img"
          />
          <Button
            onClick={() => handleDiceClick()}
            className="roll__dice"
            disabled={btnState}
          >
            🎲 Roll Dice
          </Button>
          <Button
            onClick={() => handleActiveClick()}
            className="hold"
            disabled={btnState}
          >
            📥 Hold
          </Button>
        </ItemsBox>
      </Wrapper>
    </Container>
  );
};

export default DiceGame;
