import { combineEpics } from "redux-observable";
import { signIn } from "./sign-in";
import { signOut } from "./sign-out";
import { storeProfile } from "./store-profile";
import { changeLocale } from "./change-locale";
import { handle401 } from "./handle-401";
import { handle403 } from "./handle-403";

export default combineEpics(
  signIn,
  signOut,
  storeProfile,
  changeLocale,
  handle401,
  handle403
);
