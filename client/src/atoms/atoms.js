import { atom } from "recoil";

export const loggedUserAtom = atom({
  key: "loggedUserAtom",
  default: "working",
});

export const isLogged = atom({
  key: "isLogged",
  default: true,
});
