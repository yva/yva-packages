import { combineEpics } from "redux-observable";
import { signIn } from "./signIn";
import { signOut } from "./signOut";
import { storeProfile } from "./storeProfile";
import { handle401 } from "./handle-401";
import { handle403 } from "./handle-403";

export default combineEpics(
  signIn,
  signOut,
  storeProfile,
  handle401,
  handle403
);
