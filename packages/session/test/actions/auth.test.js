import { signIn, signOut } from "../../actions/auth";

describe("signIn", () => {
  it("should return `sign in` action", () => {
    expect(signIn()).toEqual({ type: "session/sign-in" });
  });
});

describe("signOut", () => {
  it("should return `sign out` action", () => {
    expect(signOut()).toEqual({ type: "session/sign-out" });
  });
});
