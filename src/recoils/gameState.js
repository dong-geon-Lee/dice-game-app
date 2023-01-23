import { atom, selector } from "recoil";

export const activeTurnState = atom({
  key: "activeTurnState",
  default: true,
});

export const playerWinState = atom({
  key: "playerWinState",
  default: false,
});

export const btnDisabledState = atom({
  key: "btnDisabledState",
  default: false,
});

export const p1AccScoreState = atom({
  key: "p1AccScoreState",
  default: 0,
});

export const p1CurScoreState = atom({
  key: "p1CurScoreState",
  default: 0,
});

export const p2AccScoreState = atom({
  key: "p2AccScoreState",
  default: 0,
});

export const p2CurScoreState = atom({
  key: "p2CurScoreState",
  default: 0,
});

export const randomDiceState = atom({
  key: "randomDiceState",
  default: Math.floor(Math.random() * 6 + 1),
});

export const currentTotalState = atom({
  key: "currentTotalState",
  default: 0,
});

export const scoreTotalState = atom({
  key: "scoreTotalState",
  default: 0,
});

export const calcP1CurState = selector({
  key: "calcP1CurState",
  get: ({ get }) => {
    let p1CurScore = get(p1CurScoreState);
    let randomDice = get(randomDiceState);
    return p1CurScore + randomDice;
  },
});

export const calcP2CurState = selector({
  key: "calcP2CurState",
  get: ({ get }) => {
    let p2CurScore = get(p2CurScoreState);
    let randomDice = get(randomDiceState);
    return p2CurScore + randomDice;
  },
});

export const calcCurScoreState = selector({
  key: "calcCurScoreState",
  get: ({ get }) => {
    let p1CurScore = get(p1CurScoreState);
    let p2CurScore = get(p2CurScoreState);
    let randomDice = get(randomDiceState);
    let activeTurn = get(activeTurnState);

    if (activeTurn) return p1CurScore + randomDice;
    if (!activeTurn) return p2CurScore + randomDice;
  },
});

export const gameScoreState = selector({
  key: "gameScoreState",
  get: ({ get }) => {
    let p1AccScore = get(p1AccScoreState);
    let p1CurScore = get(p1CurScoreState);
    let p2AccScore = get(p2AccScoreState);
    let p2CurScore = get(p2CurScoreState);
    let activeTurn = get(activeTurnState);

    if (activeTurn) return p1AccScore + p1CurScore;
    if (!activeTurn) return p2AccScore + p2CurScore;
  },
});
