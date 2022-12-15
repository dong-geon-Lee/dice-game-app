import { atom } from "recoil";

export const activeTurnState = atom({
  key: "activeTurnState",
  default: true,
});

export const playerWinState = atom({
  key: "playerWinState",
  default: false,
});

export const p1CurTotalState = atom({
  key: "p1CurTotalState",
  default: 0,
});

export const p2CurTotalState = atom({
  key: "p2CurTotalState",
  default: 0,
});

export const p1ScoreTotalState = atom({
  key: "p1ScoreTotalState",
  default: 0,
});

export const p2ScoreTotalState = atom({
  key: "p2ScoreTotalState",
  default: 0,
});
