import { reducers } from "@yva/ui-state";
import { name } from "../actions";

export const uiReducer = (state, action) => {
  if (action.type.startsWith(name)) {
    return reducers.uiReducer(state, action);
  }

  return state;
};
