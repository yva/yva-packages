import { getAuthLink, hasAccessToken } from "../src/lib";

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

jest.mock("@yva/credits", () => ({
  getCreds: () => ({
    accessToken: null,
  }),
}));

describe("getAuthLink", () => {
  it("should return an auth link by params", () => {
    expect(getAuthLink({ isLogin: false })).toEqual(
      "https://localhost/sso/oauth2/authorize?clientId=5a9602da0f2ce70fd438bc43&redirectUri=https%3A%2F%2Flocalhost%2Fdashboard%2Fauth&responseType=Code&isLogin=false"
    );
  });
});

describe("hasAccessToken", () => {
  it("should return false for missing `accessToken`", () => {
    expect(hasAccessToken()).toBeFalsy();
  });
});
