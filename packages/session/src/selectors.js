import { lib } from "@findo/ui-state";

const { isSuccess, isIdle } = lib;

export const getUI = state => {
  return state.get("ui");
};

export const isUserAuthenticated = state => {
  return isSuccess(state.getIn(["ui", "state"]));
};

export const isUserUnknown = state => {
  return isIdle(state.getIn(["ui", "state"]));
};

export const getProfile = state => {
  return state.get("profile");
};

export const hasUserATeam = state => {
  return !!state.getIn(["profile", "team", "id"], false);
};

export const getTeam = state => {
  return state.getIn(["profile", "team"]);
};

export const getRoles = state => {
  return state.getIn(["profile", "team", "roles"], null);
};
