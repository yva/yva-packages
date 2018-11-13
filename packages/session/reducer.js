import { combineReducers } from "redux-immutable";

// reducers
import { profileReducer } from "./reducers/profile";
import { uiReducer } from "@findo/ui-state";

// state
import { InitialState } from "./models/InitialState";

export const sessionReducer = combineReducers(
  {
    profile: profileReducer,
    ui: uiReducer,
  },
  InitialState
);
