export const getUI = state => {
  return state.get("ui");
};

export const isUserAuthenticated = state => {
  return state.get("profile") !== null;
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
  return state.getIn(["profile", "team", "rolesAndSettings"], null);
};
