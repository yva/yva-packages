import { combineReducers } from "redux-immutable";

// reducers
import { profileReducer } from "./profile";
import { reducers } from "@findo/ui-state";

// state
import { InitialState } from "../models/InitialState";

const { uiReducer } = reducers;

export const sessionReducer = combineReducers(
  {
    profile: profileReducer,
    ui: uiReducer,
  },
  InitialState
);
