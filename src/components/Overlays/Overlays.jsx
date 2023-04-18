import React from "react";
import { useRecoilState } from "recoil";
import { modalState, overlayState } from "../../recoils/modalState";
import { closeModals } from "../../helpers/helpers";
import * as S from "./styles";

const Overlays = () => {
  const [, setModals] = useRecoilState(modalState);
  const [, setOverlays] = useRecoilState(overlayState);

  return <S.Container onClick={() => closeModals(setModals, setOverlays)} />;
};

export default Overlays;
