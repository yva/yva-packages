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
  return !!state.getIn(["profile", "teamId"], false);
};

export const getRoles = state => {
  return state.getIn(["profile", "rolesAndSettings"], null);
};
