import { getToken, getProfile } from "../src/api";

jest.mock("@yva/request", () => ({
  request: conf => conf,
}));

jest.mock("@yva/config", () => ({
  getConfig: () => ({
    BASE_NAME: "/dashboard",
    UPDATE_INTERVAL: 20000,
    APP: "https://localhost/dashboard",
    API: "https://localhost/api",
    SSO: "https://localhost/sso",
    CLIENT_ID: "5a9602da0f2ce70fd438bc43",
    REDIRECT_URI: "https://localhost/dashboard/auth",
    VERSION: "1.0.1",
  }),
}));

describe("getToken", () => {
  it("should call @yva/request with passed config", () => {
    expect(getToken("CODE")).toEqual({
      url: "https://localhost/sso/oauth2/token/",
      method: "POST",
      responseType: "json",
      body: {
        clientId: "5a9602da0f2ce70fd438bc43",
        redirectUri: "https://localhost/dashboard/auth",
        grantType: "authorizationCode",
        code: "CODE",
      },
    });
  });
});

describe("getProfileRequest", () => {
  it("should call @yva/request with passed config", () => {
    expect(getProfile()).toEqual({
      url: "https://localhost/api/users/users/me/",
    });
  });
});
