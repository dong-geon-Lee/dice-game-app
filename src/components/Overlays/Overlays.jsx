import React from "react";
import { Container } from "./styles";

const Overlays = ({ handleModals }) => {
  return <Container onClick={() => handleModals()}></Container>;
};

export default Overlays;
