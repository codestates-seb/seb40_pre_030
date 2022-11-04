import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loggedUserAtom = atom({
  key: "loggedUserAtom",
  default: "working",
});

export const loginStatus = atom({
  key: "loginStatus",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loginInfo = atom({
  key: `loginInfo`,
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const currentQuestionState = atom({
  key: "currentQuestionState",
  default: null,
});

export const currentAnswerState = atom({
  key: "currentAnswerState",
  default: null,
});
