import { saveLocale, getLocale, clearLocale } from "../src/index";
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

    clear: () => {
      localCookies = {};
    },
  };
});

describe("saveLocale", () => {
  beforeEach(() => {
    cookies.clear();
  });

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
  beforeEach(() => {
    cookies.clear();
  });

  it("should be a function", () => {
    expect(typeof getLocale).toEqual("function");
  });

  it("should return a default locale if no one has been saved before", () => {
    expect(getLocale()).toEqual("en");
  });

  it("should get locale from the cookies", () => {
    const locale = "en";

    saveLocale(locale);
    expect(getLocale()).toEqual("en");
  });
});

describe("clearLocale", () => {
  beforeEach(() => {
    cookies.clear();
  });

  it("should be a function", () => {
    expect(typeof clearLocale).toEqual("function");
  });

  it("should remove locale from the cookies", () => {
    const locale = "en";

    saveLocale(locale);
    expect(Object.keys(cookies._getLocal())).toEqual(["locale"]);

    clearLocale();
    expect(Object.keys(cookies._getLocal()).length).toEqual(0);
  });
});
