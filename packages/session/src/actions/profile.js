import { async } from "redux-async-epic";
import { replace } from "react-router-redux";
import { createAction } from "redux-actions";
import { getProfile } from "../api";
import types from "./types";

export const fetchProfile = createAction(
  types.fetchProfile,
  null,
  storedLocation => ({
    [async]: true,
    method: getProfile,
    onSuccess: () => {
      let location = "/";

      try {
        location = JSON.parse(storedLocation);
      } catch (_) {}

      return replace(location);
    },
  })
);
