import { withLocale } from "../src/lib/with-Locale";

jest.mock("@yva/locale", () => ({
  getLocale: () => "en",
}));

describe("withLocale", () => {
  it("should return a function", () => {
    const fn = withLocale();

    expect(typeof fn).toEqual("function");
  });

  it("should add `locale` query param to the request url", () => {
    const enhance = withLocale();

    expect(enhance({ url: "http://localhost" })).toEqual({
      url: "http://localhost/?locale=en",
    });
  });

  it("should add `locale` query param with `ru` value", () => {
    const enhance = withLocale("ru");

    expect(enhance({ url: "http://localhost" })).toEqual({
      url: "http://localhost/?locale=ru",
    });
  });

  it("should return passed config if it is not an object or is `null`", () => {
    const enhance = withLocale();

    expect(enhance(false)).toEqual(false);
    expect(enhance(null)).toEqual(null);
  });
});
