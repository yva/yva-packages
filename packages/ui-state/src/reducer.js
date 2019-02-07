import {
  isAsyncAction,
  isSuccessAction,
  isErrorAction
} from "redux-async-epic";
import * as states from "./states";
import { UI } from "./models/UI";

export const uiReducer = (state = new UI(), action) => {
  const { payload, meta } = action;

  if (isAsyncAction(action)) {
    const newState = state.set("state", states.pending);

    if (meta && meta.details) {
      return newState.set("details", meta.details);
    }

    return newState;
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

    const newState = state.set("state", states.success);

    if (meta && meta.details) {
      return newState.set("details", meta.details);
    }

    return newState;
  }

  return state;
};
