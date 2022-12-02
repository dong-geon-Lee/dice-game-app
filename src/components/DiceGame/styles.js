import styled, { css } from "styled-components";

export const Container = styled.div`
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
  /* 게임 승리시 배경 색  #748ffc */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? "#ffdeeb" : "#faa2c1")};
  transition: all 0.6s ease-out;

  ${(props) =>
    props.active
      ? css`
          filter: contrast(200%) brightness(100%);
        `
      : css`
          filter: contrast(150%) brightness(50%);
        `}

  ${(props) =>
    props.gameWin1 &&
    props.active &&
    css`
      background-color: #748ffc;
    `}
`;

export const Right = styled(Left)`
  background-color: ${(props) => (props.active ? "#ffdeeb" : "#faa2c1")};

  ${(props) =>
    props.gameWin2 &&
    props.active &&
    css`
      background-color: #748ffc;
    `}
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
  margin: 8rem 0 0 0;
`;

export const WinTitle = styled(Title)`
  margin: 2rem 0 0 0;
  font-size: 4.2rem;
  color: #ffdeeb;
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

export const Text = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 1px;
`;
