import { signIn, signOut } from "../../src/actions/auth";

describe("signIn", () => {
  it("should return `sign in` action", () => {
    expect(signIn()).toEqual({ type: "@yva/session/sign-in" });
  });
});

describe("signOut", () => {
  it("should return `sign out` action", () => {
    expect(signOut()).toEqual({ type: "@yva/session/sign-out" });
  });
});
