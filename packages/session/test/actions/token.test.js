import { isObservable } from "rxjs";
import { fetchToken } from "../../src/actions/token";
import { async } from "redux-async-epic";

beforeAll(() => {
  window.env = {
    REACT_APP_ROOT: "/dashboard",
    REACT_APP_API: "https://localhost/api",
    REACT_APP_SSO: "https://localhost/sso",
    REACT_APP_CLIENT_ID: "5a9602da0f2ce70fd438bc43",
    REACT_APP_REDIRECT_URI: "/auth",
    REACT_APP_VERSION: "1.0.1",
  };
});

describe("fetchToken", () => {
  const action = fetchToken({
    code: "CODE",
    storedLocation: "/",
  });

  it("should return `fetch token` action", () => {
    expect(action.type).toEqual("@yva/session/fetch-token");
  });

  it("should have `meta` prop", () => {
    expect(Object.keys(action.meta).length).toBeGreaterThan(0);
  });

  it("should be an `async` action", () => {
    expect(action.meta[async]).toBeTruthy();
  });

  it("should call a function that returns an Observable", () => {
    expect(typeof action.meta.method).toEqual("function");
    expect(isObservable(action.meta.method())).toBeTruthy();
  });

  it("should have `onSuccess` action", () => {
    expect(typeof action.meta.onSuccess).toEqual("function");
  });

  it("should return the `fetchProfile` action by `onSuccess` prop", () => {
    const successAction = action.meta.onSuccess("/");

    expect(successAction).toHaveProperty("type");
    expect(successAction).toHaveProperty("payload");
    expect(successAction.type).toEqual("@yva/session/fetch-profile");
    expect(successAction.payload).toEqual("/");
  });
});
