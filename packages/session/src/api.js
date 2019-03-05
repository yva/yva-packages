import urljoin from "url-join";
import { request } from "@yva/request";
import { getEnv } from "@yva/config";

export const getToken = code => {
  const clientId = getEnv("CLIENT_ID");
  const SSO = getEnv("SSO");
  const ROOT = getEnv("ROOT");
  const REDIRECT_URI = getEnv("REDIRECT_URI");

  const redirectUri = new URL(
    urljoin(ROOT, REDIRECT_URI),
    window.location.origin
  ).href;

  return request({
    url: `${SSO}/oauth2/token/`,
    method: "POST",
    responseType: "json",
    body: {
      clientId,
      redirectUri,
      grantType: "authorizationCode",
      code,
    },
  });
};

export const getProfile = () => {
  const API = getEnv("API");

  return request({
    url: `${API}/users/users/me/`,
  });
};

export const changeLocale = locale => {
  const API = getEnv("API");

  return request({
    url: `${API}/users/users/me/locale`,
    method: "put",
    body: {
      value: locale,
    },
  });
};
