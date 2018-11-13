import { cleanCreds } from "@findo/credits";
import { tap, ignoreElements } from "rxjs/operators";
import { ofType } from "redux-observable";
import { getAuthLink } from "../lib";
import { types } from "../actions";

export const signOut = action$ =>
  action$.pipe(
    ofType(types.signOut),
    tap(cleanCreds),
    tap(() => {
      window.location.assign(getAuthLink({ logout: true }));
    }),
    ignoreElements()
  );
