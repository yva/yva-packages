import { request } from "@findo/request";
import { getConfig } from "@findo/config";

export const getToken = code => {
  const { SSO, CLIENT_ID, REDIRECT_URI } = getConfig();

  return request({
    url: `${SSO}/oauth2/token/`,
    method: "POST",
    responseType: "json",
    body: {
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      grantType: "authorizationCode",
      code,
    },
  });
};

export const getProfile = () => {
  const { API } = getConfig();

  return request({
    url: `${API}/users/users/me/`,
  });
};
