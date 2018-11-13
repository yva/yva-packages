import {
  isAsyncAction,
  isSuccessAction,
  isErrorAction
} from "redux-async-epic";
import { states } from "./states";
import { UI } from "./models/UI";

export const uiReducer = (state = new UI(), action) => {
  const { payload } = action;

  if (isAsyncAction(action)) {
    return state.set("state", states.pending);
  }

  if (isErrorAction(action)) {
    return state.set("state", states.error).set("details", payload);
  }

  if (isSuccessAction(action)) {
    if (payload && payload.status && payload.status === 204) {
      let reason = null;

      try {
        reason = payload.xhr.getResponseHeader("X-No-Content-Reason");
      } catch (_) {}

      return state.set("state", states.empty).set("details", reason);
    }

    return state.set("state", states.success);
  }

  return state;
};
