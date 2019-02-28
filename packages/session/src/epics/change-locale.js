import { ofType } from "redux-observable";
import { getSuccessType } from "redux-async-epic";
import { tap, ignoreElements } from "rxjs/operators";
import { clearStoredProfile } from "../lib";
import { types } from "../actions";

export const changeLocale = action$ =>
  action$.pipe(
    ofType(getSuccessType(types.changeLocale)),
    tap(() => {
      clearStoredProfile();
      // the URL checking is necessary because of Code param.
      // If we refresh page when we are changing Code to AccessToken
      // we'll get 400 error - Code has already been used

      // I know it seems like a crap 💩 but it's the best
      // way to handle it 😭
      if (!window.location.href.includes("/auth")) {
        window.location.reload();
      }
    }),
    ignoreElements()
  );
