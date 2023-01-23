export const diceNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

export const openModals = (setModals, setOverlays) => {
  setModals(true);
  setOverlays(true);
};

export const closeModals = (setModals, setOverlays) => {
  setModals(false);
  setOverlays(false);
};

export const displayWinPlayer = (
  setBtnDisabled,
  setPlayerWin,
  setCurScore,
  setAccScore,
  gameScore
) => {
  setBtnDisabled(true);
  setPlayerWin(true);
  setCurScore(0);
  setAccScore(gameScore);
};
