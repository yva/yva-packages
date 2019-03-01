import { getToken, getProfile, changeLocale } from "../src/api";

jest.mock("@yva/request", () => ({
  request: conf => conf,
}));

beforeAll(() => {
  window.env = {
    REACT_APP_ROOT: "/dashboard",
    REACT_APP_API: "https://localhost/api",
    REACT_APP_SSO: "https://localhost/sso",
    REACT_APP_CLIENT_ID: "5a9602da0f2ce70fd438bc43",
    REACT_APP_REDIRECT_URI: "https://localhost/dashboard/auth",
    REACT_APP_VERSION: "1.0.1",
  };
});

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

describe("changeLocale", () => {
  it("should call @yva/request with passed config", () => {
    expect(changeLocale("en")).toEqual({
      url: "https://localhost/api/users/users/me/locale",
      method: "put",
      body: {
        value: "en",
      },
    });
  });
});
