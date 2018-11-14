import { saveCreds, getCreds, cleanCreds } from "../src/index";
import cookies from "js-cookie";

jest.mock("js-cookie", () => {
  let localCookies = {};

  return {
    _getLocal: () => {
      return localCookies;
    },

    set: (name, value, options) => {
      localCookies[name] = {
        value,
        options,
      };
    },

    get: name => {
      return localCookies[name];
    },

    remove: name => {
      delete localCookies[name];
    },
  };
});

describe("saveCreds", () => {
  it("should be a function", () => {
    expect(typeof saveCreds).toEqual("function");
  });

  it("should not save cookies if no params have been passed", () => {
    saveCreds();

    expect(cookies._getLocal()).toEqual({});
  });

  it("should save credits to the cookies", () => {
    const credits = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEyM30.kRqQkJudxgI3koJAp9K4ENp6E2ExFQ5VchogaTWx6Fk",
      userId: "012345",
    };

    saveCreds(credits);

    expect(cookies._getLocal()).toEqual({
      accessToken: {
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEyM30.kRqQkJudxgI3koJAp9K4ENp6E2ExFQ5VchogaTWx6Fk",
        options: {
          expires: new Date(123 * 1000),
        },
      },
      userId: {
        value: "012345",
        options: undefined,
      },
    });
  });
});

describe("getCreds", () => {
  it("should be a function", () => {
    expect(typeof getCreds).toEqual("function");
  });

  it("should get credits from the cookies", () => {
    const credits = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEyM30.kRqQkJudxgI3koJAp9K4ENp6E2ExFQ5VchogaTWx6Fk",
      userId: "012345",
    };

    saveCreds(credits);

    expect(getCreds()).toEqual({
      accessToken: {
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEyM30.kRqQkJudxgI3koJAp9K4ENp6E2ExFQ5VchogaTWx6Fk",
        options: {
          expires: new Date(123 * 1000),
        },
      },
      userId: {
        value: "012345",
        options: undefined,
      },
    });
  });
});

describe("cleanCreds", () => {
  it("should be a function", () => {
    expect(typeof cleanCreds).toEqual("function");
  });

  it("should remove credits from the cookies", () => {
    const credits = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjEyM30.kRqQkJudxgI3koJAp9K4ENp6E2ExFQ5VchogaTWx6Fk",
      userId: "012345",
    };

    saveCreds(credits);
    expect(Object.keys(cookies._getLocal())).toEqual(["accessToken", "userId"]);

    cleanCreds();
    expect(Object.keys(cookies._getLocal()).length).toEqual(0);
  });
});
