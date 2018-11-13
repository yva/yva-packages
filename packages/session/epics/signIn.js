import { switchMap, ignoreElements, tap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";
import { types, fetchProfile } from "../actions";
import { getAuthLink, hasAccessToken } from "../lib";

export const signIn = action$ =>
  action$.pipe(
    ofType(types.signIn),
    switchMap(({ payload }) => {
      if (!hasAccessToken()) {
        return of(payload).pipe(
          tap(payload => {
            window.location.assign(getAuthLink(payload));
          }),

          ignoreElements()
        );
      }

      return of(fetchProfile(payload.state));
    })
  );
