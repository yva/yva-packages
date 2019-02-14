import { uiReducer as ui } from "@yva/ui-state";
import { name } from "../actions";

export const uiReducer = (state, action) => {
  if (action.type.startsWith(name)) {
    return ui(state, action);
  }

  return state;
};
