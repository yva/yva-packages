import { stringify } from "qs";
import { getConfig } from "@yva/config";
import { getCreds } from "@yva/credits";

export const getAuthLink = params => {
  const { SSO, CLIENT_ID, REDIRECT_URI } = getConfig();

  const data = {
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    responseType: "Code",
    ...params,
  };

  return `${SSO}/oauth2/authorize?${stringify(data)}`;
};

export const hasAccessToken = () => {
  const { accessToken } = getCreds();
  return !!accessToken;
};

export const storeProfile = profile => {
  try {
    sessionStorage.setItem("profile", JSON.stringify(profile));

    return true;
  } catch (e) {}

  return false;
};

export const getProfile = () => {
  try {
    const profile = sessionStorage.getItem("profile");
    return JSON.parse(profile);
  } catch (e) {}

  return null;
};

export const clearStoredProfile = () => {
  try {
    sessionStorage.removeItem("profile");
  } catch (e) {}
};
