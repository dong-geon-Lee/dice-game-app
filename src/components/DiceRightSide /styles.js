import styled, { css } from "styled-components";
import { Left } from "../DiceLeftSide/styles";

export const Right = styled(Left)`
  background-color: ${(props) => (props.active ? "#ffdeeb" : "#faa2c1")};

  ${(props) =>
    props.playerWin &&
    props.active &&
    css`
      background-color: #748ffc;
    `}
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 8rem 0 0 0;
`;

export const Score = styled.h1`
  font-size: 7.2rem;
  font-weight: 700;
  color: #c6365f;
  margin: 0;
`;

export const WinTitle = styled(Title)`
  margin: 2rem 0 0 0;
  font-size: 4.2rem;
  color: #ffdeeb;
`;

export const Text = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 1px;
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
