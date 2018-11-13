import { getConfig } from "../index";

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
