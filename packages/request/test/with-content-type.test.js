import { withContentType } from "../src/lib/with-content-type";

describe("withContentType", () => {
  it("should return a function", () => {
    const fn = withContentType();

    expect(typeof fn).toEqual("function");
  });

  it("should merge to the conf `headers` property `Accept` and `Content-Type`", () => {
    const enhance = withContentType("application/json");

    expect(enhance({ headers: { "X-Custom": "custom header" } })).toEqual({
      headers: {
        "X-Custom": "custom header",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  });

  it("should return an object w/ property `Accept` and `Content-Type`", () => {
    const enhance = withContentType("application/json");

    expect(enhance({})).toEqual({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  });

  it("should return passed config if it is not an object or is `null`", () => {
    const enhance = withContentType("dummy-type");

    expect(enhance(false)).toEqual(false);
    expect(enhance(null)).toEqual(null);
  });
});
