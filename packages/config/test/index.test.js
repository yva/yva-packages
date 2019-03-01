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
    global.process = { env: {} };
  });

  it("should retun an empty object if is no env has been found", () => {
    const env = getEnv();

    expect(typeof env).toEqual("object");
    expect(Object.keys(env).length).toEqual(0);
  });

  it("should return process.env in development mode", () => {
    global.process = {
      env: {
        NODE_ENV: "development",
      },
    };

    expect(getEnv()).toEqual({
      NODE_ENV: "development",
    });
  });

  it("should return window.env in production mode", () => {
    global.process = {
      env: {
        NODE_ENV: "production",
      },
    };

    window.env = {
      API_PATH: "/api",
    };

    expect(getEnv()).toEqual({
      API_PATH: "/api",
    });
  });

  it("should return env key", () => {
    global.process = {
      env: {
        NODE_ENV: "development",
        REACT_APP_API_ROOT: "/api-root",
      },
    };

    expect(getEnv("REACT_APP_API_ROOT")).toEqual("/api-root");
  });

  it("should append REACT_APP to env key if it has not", () => {
    global.process = {
      env: {
        NODE_ENV: "development",
        REACT_APP_API_ROOT: "/api-root",
      },
    };

    expect(getEnv("API_ROOT")).toEqual("/api-root");
  });
});
