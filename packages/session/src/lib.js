import { stringify } from "qs";
import urljoin from "url-join";
import { getEnv } from "@yva/config";
import { getCreds } from "@yva/credits";

export const getAuthLink = params => {
  const clientId = getEnv("CLIENT_ID");
  const SSO = getEnv("SSO");
  const ROOT = getEnv("ROOT");
  const REDIRECT_URI = getEnv("REDIRECT_URI");

  const redirectUri = new URL(
    urljoin(ROOT, REDIRECT_URI),
    window.location.origin
  ).href;

  const data = {
    clientId,
    redirectUri,
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

export const restoreProfile = () => {
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
