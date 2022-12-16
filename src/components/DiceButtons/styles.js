import styled, { css } from "styled-components";

export const ItemsBox = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0%;
  width: 100%;
  height: 100%;

  & .guide__modals {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -3%);
  }

  & .new__game {
    position: absolute;
    left: 50%;
    top: 12%;
    transform: translate(-50%, -15%);
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

export const DiceImg = styled.img`
  width: 9.2rem;
  height: 9.2rem;
  object-fit: cover;
  display: block;
  margin: auto;
  box-shadow: 0 1rem 3rem 1rem rgba(0, 0, 0, 0.15);
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

  ${(props) =>
    props.disabled
      ? css`
          button[disabled]:hover {
            background-color: #ced4da;
          }
        `
      : css`
          &:hover {
            background-color: #ced4da;
          }
        `}
`;
