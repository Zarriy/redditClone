import { atom } from "recoil";

export interface AuthModalType {
  open: boolean;
  default: "login" | "signup" | "reset";
}

const defaultAuthModalState: AuthModalType = {
  open: false,
  default: "login",
};

export const authModalState = atom<AuthModalType>({
  key: "authModalState",
  default: defaultAuthModalState,
});
