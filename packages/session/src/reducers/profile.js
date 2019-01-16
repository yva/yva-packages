import { handleActions } from "redux-actions";
import { getSuccessType } from "redux-async-epic";
import { types } from "../actions";
import { Profile } from "../models/Profile";

export const profileReducer = handleActions(
  {
    [getSuccessType(types.fetchProfile)]: (state, action) => {
      const response = action.payload && action.payload.response;

      if (response) {
        return new Profile(action.payload.response);
      }

      return state;
    },
  },
  null
);
