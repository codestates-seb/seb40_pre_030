import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v4 as uuidv4 } from "uuid";

const { persistAtom } = recoilPersist();

export const loginStatus = atom({
  key: `loginStatus/${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loginInfo = atom({
  key: `loginInfo/${uuidv4()}`,
  default: null,
  effects_UNSTABLE: [persistAtom],
});
