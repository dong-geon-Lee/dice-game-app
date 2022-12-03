import React, { useState } from "react";
import Modals from "./components/Modals/Modals";
import Overlays from "./components/Overlays/Overlays";
import DiceGame from "./pages/DiceGame/DiceGame";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const [modals, setModals] = useState(false);
  const [overlays, setOverlays] = useState(false);

  const handleModals = () => {
    setModals((prev) => !prev);
    setOverlays((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      {overlays && <Overlays handleModals={handleModals} />}
      {modals && <Modals handleModals={handleModals} />}
      <DiceGame handleModals={handleModals} />
    </>
  );
};

export default App;
