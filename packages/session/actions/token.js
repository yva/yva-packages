import { saveCreds } from "@findo/credits";
import { async } from "redux-async-epic";
import { createAction } from "redux-actions";
import { tap, pluck } from "rxjs/operators";
import { getToken } from "../api";
import { fetchProfile } from "./profile";
import types from "./types";

export const fetchToken = createAction(types.fetchToken, null, payload => ({
  [async]: true,
  method: () =>
    getToken(payload.code).pipe(
      tap(saveCreds),
      pluck("accessToken")
    ),
  onSuccess: () => fetchProfile(payload.storedLocation),
}));
