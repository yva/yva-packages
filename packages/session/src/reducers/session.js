import { combineReducers } from "redux-immutable";

// reducers
import { profileReducer } from "./profile";
import { uiReducer } from "./ui";

// state
import { InitialState } from "../models/InitialState";

export const sessionReducer = combineReducers(
  {
    profile: profileReducer,
    ui: uiReducer,
  },
  InitialState
);
