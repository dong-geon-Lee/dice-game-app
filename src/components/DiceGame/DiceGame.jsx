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
  const [cur1Score, setCur1Score] = useState(0);
  const [cur2Score, setCur2Score] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [active, setActive] = useState(true);
  const [btnState, setBtnState] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);

  let scoreTotal, curTotal;

  // 주사위 굴리기
  const handleDiceBtn = () => {
    // 주사위 숫자 1이 연속으로 나올 떄, 이떄는 state가 변하기 이전
    // 이므로 직관적으로 볼 떄, 수동으로 턴이 이동되게 만들어야된다.
    if (diceNum === 1) setActive((prev) => !prev);

    // 클릭 할 떄마다 랜덤 숫자를 업데이트 시켜준다.
    // 매번 다른 숫자를 함수인자로 넣어준다.
    setDiceNum(diceNumber());
    calcCurScore(diceNum);
  };

  function calcCurScore(diceNumber) {
    // 이 게임은 주사위 숫자가 1이 나오면 턴이 상대편에게 넘어가는
    // 규칙을 이용해야 되기 떄문에 state active로
    // toggle 패턴 (prev => !prev)을 사용했다.

    // active가 true 일떄는 player1Score의 current를 더해준다
    if (active) {
      curTotal = cur1Score + diceNumber;
      setCur1Score(curTotal);
    }

    // active가 false 일떄는 player2Score의 current를 더해준다
    if (!active) {
      curTotal = cur2Score + diceNumber;
      setCur2Score(curTotal);
    }
  }

  const handleHoldBtn = () => {
    if (active) {
      scoreTotal = player1Score + cur1Score;

      if (scoreTotal >= 20) {
        calcPlayer1Win();
        return;
      }

      setActive((prev) => !prev);
      setPlayer1Score(scoreTotal);
      setCur1Score(0);
    }

    if (!active) {
      scoreTotal = player2Score + cur2Score;

      if (scoreTotal >= 20) {
        calcPlayer2Win();
        return;
      }

      setActive((prev) => !prev);
      setPlayer2Score(scoreTotal);
      setCur2Score(0);
    }
  };

  function calcPlayer1Win() {
    setBtnState(true);
    setPlayerWin(true);
    setPlayer1Score(scoreTotal);
    setCur1Score(0);
  }

  function calcPlayer2Win() {
    setBtnState(true);
    setPlayerWin(true);
    setPlayer2Score(scoreTotal);
    setCur2Score(0);
  }

  const handleResetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setCur1Score(0);
    setCur2Score(0);
    setActive(true);
    setBtnState(false);
    setPlayerWin(false);
    setDiceNum(diceNumber());
  };

  // 이 useEffect는 오직 Hold 버튼을 누를 떄,
  // side Effect를 반영하기 위한 목적으로 사용된다.
  useEffect(() => {
    setTimeout(() => {
      setCur1Score(0);
      setCur2Score(0);
      setBtnState(false);
    }, 1000);
    setBtnState(true);
  }, [active, diceNum === 1]);

  // 종속성은 diceNum만 사용한다. active를 사용하면 주사위가
  // 1이 나올떄, 자동으로 턴을 넘겨버리는 문제가 발생해서 그렇다.
  // 이 useEffect는 Roll Dice 버튼을 누를 떄, 주사위를 굴리는
  // 도중에 1이 나올 떄의 상태를 반영하기 위한 로직이다.
  useEffect(() => {
    if (diceNum === 1 && (cur1Score === 0 || cur2Score === 0)) {
      setTimeout(() => {
        setActive((prev) => !prev);
        setDiceNum(diceNumber());
        setBtnState(false);
      }, 1000);
      setBtnState(true);
    }
  }, [diceNum === 1]);

  return (
    <Container>
      <Wrapper>
        <MainContent>
          <Left active={active} playerWin={playerWin}>
            <Title>Player 1</Title>
            <Score>{player1Score}</Score>

            {player1Score >= 20 && playerWin ? (
              <WinTitle>Game Win!</WinTitle>
            ) : (
              <Text>{active ? "Playing!" : "Waiting..."}</Text>
            )}

            <CurBox>
              <Label>Current</Label>
              <Span>{cur1Score}</Span>
            </CurBox>
          </Left>

          <Right active={!active} playerWin={playerWin}>
            <Title>Player 2</Title>
            <Score>{player2Score}</Score>

            {player2Score >= 20 && playerWin ? (
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
          <Button
            className="new__game"
            onClick={() => handleResetGame()}
            playerWin={playerWin}
          >
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
      </Wrapper>
    </Container>
  );
};

export default DiceGame;
