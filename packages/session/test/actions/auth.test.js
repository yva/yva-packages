import { signIn, signOut } from "../../src/actions/auth";

describe("signIn", () => {
  it("should return `sign in` action", () => {
    expect(
      signIn({
        state: {
          search: "?utm_source=email",
        },
      })
    ).toEqual({
      type: "@yva/session/sign-in",
      payload: {
        utm_source: "email",
        state: JSON.stringify({ search: "?utm_source=email" }),
      },
    });
  });
});

describe("signOut", () => {
  it("should return `sign out` action", () => {
    expect(signOut()).toEqual({ type: "@yva/session/sign-out" });
  });
});
