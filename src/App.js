import React from "react";
import DiceGame from "./components/DiceGame/DiceGame";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DiceGame />
    </>
  );
};

export default App;
