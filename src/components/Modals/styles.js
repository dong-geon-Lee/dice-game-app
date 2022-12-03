import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: #fff;
  border-radius: 1rem;
  width: 66rem;
  height: 44rem;
  box-shadow: 0 1rem 5rem 1rem rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  position: absolute;
  right: 4%;
  top: 7%;
  transform: translate(-4%, -7%);
  border: none;
  font-family: inherit;
  font-size: 2rem;
  background-color: #74c0fc;
  padding: 1.2rem 1.6rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #a5d8ff;
  }
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.8;
  text-align: center;
`;

export const Text = styled.p`
  font-style: italic;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.5;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
`;

export const Strong = styled.strong`
  font-size: 3.6rem;
  color: #c92a2a;

  & + strong {
    color: #364fc7;
  }
`;
