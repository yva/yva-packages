import { of } from "rxjs";
import * as creds from "@yva/credits";
import { signIn as epic } from "../../src/epics/signIn";
import { signIn } from "../../src/actions";

jest.mock("@yva/config", () => ({
  getConfig: () => ({
    SSO: "https://single-sign-on.sevice",
    CLIENT_ID: "1",
    REDIRECT_URI: "https://localhost/app/auth",
    VERSION: "1.0.1",
  }),
}));

describe("signIn", () => {
  it("should redirect to the sso auth", done => {
    window.location.assign = jest.fn();

    const action$ = of(signIn());
    const obs$ = epic(action$);

    obs$.subscribe({
      complete: val => {
        expect(window.location.assign).toHaveBeenCalledWith(
          `https://single-sign-on.sevice/oauth2/authorize?clientId=1&redirectUri=https%3A%2F%2Flocalhost%2Fapp%2Fauth&responseType=Code`
        );

        window.location.assign.mockRestore();

        done();
      },
    });
  });

  it("should retun `fetchProfile` action observable", done => {
    creds.getCreds = jest.fn(() => ({
      accessToken: 12345,
    }));

    const action$ = of(signIn({ state: null }));
    const obs$ = epic(action$);

    obs$.subscribe({
      next: action => {
        expect(action).toHaveProperty("type");
        expect(action.type).toEqual("session/fetch-profile");
        creds.getCreds.mockRestore();
        done();
      },
    });
  });
});
