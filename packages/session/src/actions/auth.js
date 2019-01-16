import { createAction } from "redux-actions";
import { parse } from "qs";
import types from "./types";

export const signIn = createAction(types.signIn, location => {
  if (!location || !location.state) {
    return {};
  }

  const search = parse(location.state.search, {
    ignoreQueryPrefix: true,
  });

  return {
    ...search,
    state: JSON.stringify(location.state),
  };
});
export const signOut = createAction(types.signOut);
