import React from "react";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../atoms/modalState";
import { Container } from "./styles";

const Overlays = () => {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  const handleModals = () => {
    setModals(false);
    setOverlays(false);
  };

  return <Container onClick={() => handleModals()}></Container>;
};

export default Overlays;
