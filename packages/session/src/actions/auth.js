import { createAction } from "redux-actions";
import types from "./types";

export const signIn = createAction(types.signIn);
export const signOut = createAction(types.signOut);
