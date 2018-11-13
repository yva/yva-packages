import { combineEpics } from "redux-observable";
import { signIn } from "./signIn";
import { signOut } from "./signOut";
import { handle401 } from "./handle-401";
import { handle403 } from "./handle-403";

export default combineEpics(signIn, signOut, handle401, handle403);
