import { cleanCreds } from "@yva/credits";
import { tap, ignoreElements } from "rxjs/operators";
import { ofType } from "redux-observable";
import { getAuthLink, clearStoredProfile } from "../lib";
import { types } from "../actions";

export const signOut = action$ =>
  action$.pipe(
    ofType(types.signOut),
    tap(() => {
      cleanCreds();
      clearStoredProfile();
    }),
    tap(() => {
      window.location.assign(getAuthLink({ logout: true }));
    }),
    ignoreElements()
  );
