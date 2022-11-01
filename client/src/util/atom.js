import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

export const loginStatus = atom({
  key: "loginStatus",
  default: false,
});

export const loginInfo = atom({
  key: "loginInfo",
  default: null,
  // effects_UNSTABLE: [persistAtom],
});
