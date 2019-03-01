import { isObservable } from "rxjs";
import { fetchProfile, changeLocale } from "../../src/actions/profile";
import { async } from "redux-async-epic";

jest.mock("@yva/config", () => ({
  getEnv: () => ({
    REACT_APP_ROOT: "/dashboard",
    REACT_APP_API: "https://localhost/api",
    REACT_APP_SSO: "https://localhost/sso",
    REACT_APP_CLIENT_ID: "5a9602da0f2ce70fd438bc43",
    REACT_APP_REDIRECT_URI: "https://localhost/dashboard/auth",
    REACT_APP_VERSION: "1.0.1",
  }),
}));

describe("fetchProfile", () => {
  const action = fetchProfile(
    JSON.stringify({ pathname: "/", search: { q: 1 } })
  );

  it("should return `fetch profile` action", () => {
    expect(action.type).toEqual("@yva/session/fetch-profile");
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

  it("should return an action by `onSuccess` prop", () => {
    expect(action.meta.onSuccess()).toHaveProperty("type");
  });

  it("should return the `replace` action by `onSuccess` prop", () => {
    const successAction = action.meta.onSuccess();
    expect(successAction).toHaveProperty("payload");
    expect(successAction.payload).toEqual({
      args: [{ pathname: "/", search: { q: 1 } }],
      method: "replace",
    });
  });
});

describe("changeLocale", () => {
  const action = changeLocale("ru");

  it("should return `change-locale` action", () => {
    expect(action.type).toEqual("@yva/session/change-locale");
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
});
