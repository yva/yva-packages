import { getConfig, getEnv } from "../src/index";

describe("getConfig", () => {
  it("should retun an empty object if is no config has been found", () => {
    const config = getConfig();

    expect(typeof config).toEqual("object");
    expect(Object.keys(config).length).toEqual(0);
  });

  it("should return global config object", () => {
    window.config = {
      SSO: "http://localhost/sso",
    };

    expect(getConfig()).toEqual({
      SSO: "http://localhost/sso",
    });
  });
});

describe("getEnv", () => {
  beforeEach(() => {
    window.env = {};
  });

  it("should retun an empty object if is no env has been found", () => {
    const env = getEnv();

    expect(typeof env).toEqual("object");
    expect(Object.keys(env).length).toEqual(0);
  });

  it("should return env key", () => {
    window.env = {
      REACT_APP_API_ROOT: "/api-root",
    };

    expect(getEnv("REACT_APP_API_ROOT")).toEqual("/api-root");
  });

  it("should append REACT_APP to env key if it has not", () => {
    window.env = {
      REACT_APP_API_ROOT: "/api-root",
    };

    expect(getEnv("API_ROOT")).toEqual("/api-root");
  });
});
