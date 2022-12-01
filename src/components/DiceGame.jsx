import React from "react";
import styled from "styled-components";
import diceImg from "../assets/dice-3.png";

export const Container = styled.div`
  /* background-color: #ffdeeb;
  background-color: #fcc2d7; */
  width: 100rem;
  height: 60rem;
  margin: 10rem auto;
  box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffdeeb;
`;

export const Right = styled(Left)`
  background-color: #fcc2d7;
`;

export const ItemsBox = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 100%;

  & .new__game {
    position: absolute;
    left: 50%;
    top: 6%;
    transform: translate(-50%, -6%);
  }

  & .dice__img {
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -35%);
  }

  & .roll__dice {
    position: absolute;
    left: 50%;
    bottom: 22%;
    transform: translate(-50%, -22%);
  }

  & .hold {
    position: absolute;
    left: 50%;
    bottom: 12%;
    transform: translate(-50%, -12%);
  }
`;

export const Button = styled.button`
  display: block;
  border: none;
  padding: 1.4rem 2.6rem;
  background-color: #f8f9fa;
  font-family: inherit;
  font-size: 1.4rem;
  text-transform: uppercase;
  border-radius: 1rem;
  margin: 0 auto;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 8rem 0 0rem 0;
`;

export const Score = styled.h1`
  font-size: 7.2rem;
  font-weight: 700;
  color: #c6365f;
  margin: 0;
`;

export const CurBox = styled.div`
  background-color: #c6365f;
  color: #fff;
  padding: 2.2rem 4.2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 8rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Span = styled.span`
  font-size: 2.8rem;
  font-weight: 500;
`;

export const DiceImg = styled.img`
  width: 9.2rem;
  height: 9.2rem;
  object-fit: cover;
  display: block;
  margin: auto;
  box-shadow: 0 1rem 3rem 1rem rgba(0, 0, 0, 0.15);
`;

const DiceGame = () => {
  return (
    <Container>
      <Wrapper>
        <MainContent>
          <Left>
            <Title>Player 1</Title>
            <Score>0</Score>
            <CurBox>
              <Label>Current</Label>
              <Span>0</Span>
            </CurBox>
          </Left>
          <Right>
            <Title>Player 2</Title>
            <Score>0</Score>
            <CurBox>
              <Label>Current</Label>
              <Span>0</Span>
            </CurBox>
          </Right>
        </MainContent>

        <ItemsBox>
          <Button className="new__game">🔄 New Game</Button>
          <DiceImg src={diceImg} alt="dice-img" className="dice__img" />
          <Button className="roll__dice">🎲 Roll Dice</Button>
          <Button className="hold">📥 Hold</Button>
        </ItemsBox>
      </Wrapper>
    </Container>
  );
};

export default DiceGame;
