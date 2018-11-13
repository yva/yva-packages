import { withAuth } from "../src/lib/with-auth";

jest.mock("@findo/credits", () => ({
  getCreds: () => ({ accessToken: "mocked token" }),
}));

describe("withAuth", () => {
  it("should return a function", () => {
    const fn = withAuth();

    expect(typeof fn).toEqual("function");
  });

  it("should add to the conf `headers` property with `Authorization` and default token from saved credits", () => {
    const enhance = withAuth();

    expect(enhance({})).toEqual({
      headers: {
        Authorization: "Bearer mocked token",
      },
    });
  });

  it("should add to the conf `headers` property with `Authorization`", () => {
    const enhance = withAuth("super secret token");

    expect(enhance({})).toEqual({
      headers: {
        Authorization: "Bearer super secret token",
      },
    });
  });

  it("should return passed config if it is not an object or is `null`", () => {
    const enhance = withAuth("");

    expect(enhance(false)).toEqual(false);
    expect(enhance(null)).toEqual(null);
  });
});
