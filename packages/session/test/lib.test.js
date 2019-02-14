import {
  getAuthLink,
  hasAccessToken,
  storeProfile,
  restoreProfile,
  clearStoredProfile
} from "../src/lib";

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

describe("storeProfile", () => {
  it("should store passed profile to the sessionStorage", () => {
    const result = storeProfile({ hasName: true });

    expect(result).toBeTruthy();
    expect(sessionStorage.getItem("profile")).toEqual(
      JSON.stringify({ hasName: true })
    );
  });

  it("should return `false` if it is not available to store profile", () => {
    let a = { a: 1 };
    let b = { a };

    // define circular dependency
    a.b = b;
    const result = storeProfile(a);
    expect(result).toBeFalsy();
  });
});

describe("restoreProfile", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("should return stored profile", () => {
    storeProfile({ hasName: true });
    expect(restoreProfile()).toEqual({ hasName: true });
  });

  it("should return `null` if no profile found", () => {
    sessionStorage.setItem("profile", "[]:123");

    expect(restoreProfile()).toEqual(null);
  });
});

describe("clearStoredProfile", () => {
  it("should remove `profile` from the sessionStorage", () => {
    storeProfile({ hasName: true });
    expect(sessionStorage.getItem("profile")).not.toBeNull();

    clearStoredProfile();
    expect(sessionStorage.getItem("profile")).toBeNull();
  });
});
