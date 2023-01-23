import React from "react";
import { useRecoilState } from "recoil";
import { closeModals } from "../../helpers/helpers";
import { modalState, overlayState } from "../../recoils/modalState";
import { Container } from "./styles";

const Overlays = () => {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  return <Container onClick={() => closeModals(setModals, setOverlays)} />;
};

export default Overlays;
