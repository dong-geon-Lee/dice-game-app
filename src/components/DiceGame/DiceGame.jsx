import React, { useState } from "react";
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
} from "./styles";

const DiceGame = () => {
  const [diceNum, setDiceNum] = useState(diceNumber());
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [cur1Score, setCur1Score] = useState(0);
  const [cur2Score, setCur2Score] = useState(0);
  const [active, setActive] = useState(true);
  const [score, setScore] = useState(0);

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
      setScore(total);
      setCur1Score(total);
    }

    if (!active) {
      let total = cur2Score + number;
      setScore(total);
      setCur2Score(total);
    }
  };

  const handleActiveClick = () => {
    if (active) {
      let score = player1 + cur1Score;
      setActive((prev) => !prev);
      setPlayer1(score);
      setCur1Score(0);
    }

    if (!active) {
      let score = player2 + cur2Score;
      setActive((prev) => !prev);
      setPlayer2(score);
      setCur2Score(0);
    }
  };

  return (
    <Container>
      <Wrapper>
        <MainContent>
          <Left active={active}>
            <Title>Player 1</Title>
            <Score>{player1}</Score>
            <Label>{active ? "플레이어1의 차례!" : ""}</Label>
            <CurBox>
              <Label>Current</Label>
              <Span>{cur1Score}</Span>
            </CurBox>
          </Left>
          <Right active={!active}>
            <Title>Player 2</Title>
            <Score>{player2}</Score>
            <Label>{!active ? "플레이어2의 차례!" : ""}</Label>
            <CurBox>
              <Label>Current</Label>
              <Span>{cur2Score}</Span>
            </CurBox>
          </Right>
        </MainContent>

        <ItemsBox>
          <Button className="new__game">🔄 New Game</Button>
          <DiceImg
            src={`${process.env.PUBLIC_URL}/img/dice-${diceNum}.png`}
            alt="dice-img"
            className="dice__img"
          />
          <Button className="roll__dice" onClick={() => handleDiceClick()}>
            🎲 Roll Dice
          </Button>
          <Button className="hold" onClick={() => handleActiveClick()}>
            📥 Hold
          </Button>
        </ItemsBox>
      </Wrapper>
    </Container>
  );
};

export default DiceGame;
