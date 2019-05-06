import { getSuccessType } from "redux-async-epic";
import { ignoreElements, tap } from "rxjs/operators";
import { saveLocale } from "@yva/locale";
import { ofType } from "redux-observable";
import { types } from "../actions";
import { storeProfile as save } from "../lib";

export const storeProfile = action$ =>
  action$.pipe(
    ofType(getSuccessType(types.fetchProfile)),
    tap(({ payload }) => {
      if (payload && payload.response) {
        save(payload.response);
        saveLocale(payload.response.settings.locale);
      }
    }),
    ignoreElements()
  );
