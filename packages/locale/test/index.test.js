import { saveLocale, getLocale, cleanLocale } from "../src/index";
import cookies from "js-cookie";

jest.mock("js-cookie", () => {
  let localCookies = {};

  return {
    _getLocal: () => {
      return localCookies;
    },

    set: (name, value) => {
      localCookies[name] = value;
    },

    get: name => {
      return localCookies[name];
    },

    remove: name => {
      delete localCookies[name];
    },
  };
});

describe("saveLocale", () => {
  it("should be a function", () => {
    expect(typeof saveLocale).toEqual("function");
  });

  it("should save default locale into cookies if no params have been passed", () => {
    saveLocale();

    expect(cookies._getLocal()).toEqual({ locale: "en" });
  });

  it("should save locale to the cookies", () => {
    const locale = "en";

    saveLocale(locale);

    expect(cookies._getLocal()).toEqual({
      locale: "en",
    });
  });
});

describe("getLocale", () => {
  it("should be a function", () => {
    expect(typeof getLocale).toEqual("function");
  });

  it("should get locale from the cookies", () => {
    const locale = "en";

    saveLocale(locale);

    expect(getLocale()).toEqual("en");
  });
});

describe("cleanLocale", () => {
  it("should be a function", () => {
    expect(typeof cleanLocale).toEqual("function");
  });

  it("should remove locale from the cookies", () => {
    const locale = "en";

    saveLocale(locale);
    expect(Object.keys(cookies._getLocal())).toEqual(["locale"]);

    cleanLocale();
    expect(Object.keys(cookies._getLocal()).length).toEqual(0);
  });
});
